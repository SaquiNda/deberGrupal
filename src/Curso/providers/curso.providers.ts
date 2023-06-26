import { CursoEntity } from "../model/curso.model";
import { ParticipantesEntity } from "../model/participantes.model";
import { DataSourceEnum, RepositoryEnum } from "../shared/enums";
import {DataSource} from "typeorm"

export const cursoProviders = [
    {
        provide:RepositoryEnum.PRODUCT_REPOSITORY,
        useFactory: (dataSource: DataSourceEnum) =>
        DataSourceEnum.getRepository(ParticipantesEntity),
        inject: [DataSourceEnum, PG_DATA_SOURCE],
    },
    {
        provide: RepositoryEnum.CATEGORY_REPOSITORY,
        useFactory: (dataSource: DataSourceEnum) =>
        DataSourceEnum.getRepository(CursoEntity),
        inject: [DataSourceEnum, PG_DATA_SOURCE],
    }
]