import { PartialType } from "@nestjs/mapped-types";
import { BaseCategoryDto } from "./base-curso.dto";

export class updateCategoryDto extends PartialType(BaseCategoryDto){}