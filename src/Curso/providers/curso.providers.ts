import { CursoEntity } from "../entities/curso.entity";
import { ParticipantesEntity } from "../entities/participantes.entity";
import { DataSourceEnum, RepositoryEnum } from "src/shared/enums";
import { DataSource } from "typeorm";

export const cursoProviders = [
    {
        provide:RepositoryEnum.PARTICIPANTE_REPOSITORY,
        useFactory: (dataSource: DataSource) =>
        DataSource.getRepository(ParticipantesEntity),
        inject: [DataSourceEnum, PG_DATA_SOURCE]
    },
    {
        provide: RepositoryEnum.CURSO_REPOSITORY,
        useFactory: (DataSource: DataSource) =>
        DataSource.getRepository(CursoEntity),
        inject: [DataSourceEnum, PG_DATA_SOURCE],
    }
]