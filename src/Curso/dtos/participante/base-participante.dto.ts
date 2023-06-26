import { IsString,IsNotEmpty,IsEmail,IsNumber,IsPositive } from "class-validator"

export class BaseParticipanteDto{
    @IsString()
    @IsNotEmpty()
    readonly name: string
    
    @IsString()
    @IsNotEmpty()
    readonly direccion: string
 
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    readonly correo: string
    
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly telefono: string
}