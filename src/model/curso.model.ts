import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ParticipantesEntity } from "./participantes.model";

@Entity('curso', { schema: 'curso' })
export class CursoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'create_at', //trabajamos con guion bajo
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;
  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
    nullable: true,
  })
  deleteAt: Date;
  @Column('varchar',{
    name:'paralelo',
    nullable:false,
    comment:'nombre del paralelo'
  })
  paralelo:string;
  @Column('numeric',{
    name:'numeroParticipantes',
    nullable:false,
    comment:'numero de participantes'
  })
  numeroParticipantes:number;

  @OneToMany(
    () =>ParticipantesEntity,
    participante =>participante.curso)
  participantes: ParticipantesEntity[];
}

