import { IsString,IsNotEmpty } from "class-validator"

export class BaseCategoryDto{
    @IsString()
    @IsNotEmpty()
    readonly name: string
    
    @IsString()
    @IsNotEmpty()
    readonly descripcion: string
 
}