import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { ParticipantesEntity } from "../model/participantes.model";
import { Repository } from "typeorm";
import { CreateParticipanteDto } from "../participantes/dto/create-participante.dto";
import { ServiceResponseHttpModel } from "../shared/models/service-responce-http.model";
import { ReadParticipanteDto } from "../dtos";
import { RepositoryEnum } from "../shared/enums/repository.enum";
import { plainToInstance } from 'class-transformer';
import { UpdateParticipanteDto } from "../participantes/dto/update-participante.dto";

@Injectable()
export class ParicipanteService {
    constructor(@Inject(RepositoryEnum.PRODUCT_REPOSITORY)
    private repository: Repository<ParticipantesEntity>) {
    }

    async create(payload: CreateParticipanteDto): Promise<ServiceResponseHttpModel>
    {
        const newParticipante = this.repository.create(payload);
        const participanteCreate = await this.repository.save(newParticipante)
        return { data: plainToInstance(ReadParticipanteDto, participanteCreate) }
    }
    async catalogue(): Promise<ServiceResponseHttpModel> {
        const response = await this.repository.findAndCount({ take: 1000 });
        return {
            data: response[0],
            // pagination: { totalItem: response[1], limit: 10}
        };
    }
    // async finAll(params?: FilterParticipanteDto) Promise<ServiceResponseHttpModel>{
    //     if(params?.limit > 0 && ParamsTokenFactory.page >= 0){
    //         return this.paginationAndFilter(params);
    //     }
    // }
    async update(id: string, payload: UpdateParticipanteDto){
        const participante = await this.repository.findOneBy({ id });
        if(participante){
            throw new NotFoundException('Participante Not Found');
        }
        this.repository.merge(participante, payload);
        return this.repository.save(participante);
    }
    async remove(id: string){
        const participante = await this.repository.findOneBy({ id});
        if(participante){
            throw new NotFoundException('Participante Not Found');
        }
        return await this.repository.softRemove(participante);
    }
    async removeAll(payload: ParticipantesEntity){
        const participante = await this.repository.findOneBy({ id });
        if(participante){
            throw new NotFoundException('Participante Not Found');
        }
        this.repository.merge(participante, payload);
        return this.repository.save(participante);
    }
}
