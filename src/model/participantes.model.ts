import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CursoEntity } from "./curso.model";

@Entity('participantes', { schema: 'curso' })
export class ParticipantesEntity {
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
    name:'nombre',
    nullable:false,
    comment:'nombre del participante'
})
nombre:string;
@Column('varchar',{
    name:'direccion',
    nullable:false,
    comment:'direccion del participante'
})
direccion:string;
@Column('varchar',{
    name:'correo',
    nullable:false,
    comment:'correo del participante'
})
correo:string;
@Column('numeric',{
    name:'telefono',
    nullable:false,
    comment:'numero de telefono del participante'
})
telefono:number;
@Column('numeric',{
    name:'curso',
    nullable:false,
    comment:'curso al que pertenese'
})
curso:CursoEntity;

@ManyToOne(

  () => CursoEntity,
  curso => curso.participantes
)
cursos: CursoEntity;
}



