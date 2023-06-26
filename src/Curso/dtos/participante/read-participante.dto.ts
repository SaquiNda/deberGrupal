import { BaseParticipanteDto } from "./base-participante.dto";
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadParticipanteDto extends BaseParticipanteDto{
    @Expose()
    readonly name;

    @Expose()
    readonly direccion;

    @Expose()
    readonly correo;

    @Expose()
    readonly telefono;
}