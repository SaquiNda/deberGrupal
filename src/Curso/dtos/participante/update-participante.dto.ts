import { PartialType } from "@nestjs/mapped-types";
import { BaseParticipanteDto } from "./base-participante.dto";

export class updateParticipanteDto extends PartialType(BaseParticipanteDto){}