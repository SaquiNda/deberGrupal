import { Exclude, Expose } from 'class-transformer';
import { BaseCategoryDto } from './base-curso.dto';

@Exclude()
export class ReadCursoDto extends BaseCategoryDto{
    @Expose()
    readonly name;

    @Expose()
    readonly descripcion;

}