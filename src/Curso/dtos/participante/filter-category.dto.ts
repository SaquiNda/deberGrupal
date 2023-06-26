import { IsOptional, IsString } from "class-validator";
import { isStringValidationOptions } from "src/shared/validation/validation-message";

export class FilterParticipanteDto {
    @IsOptional()
    @IsString(isStringValidationOptions())
    readonly title: string;
  
  }