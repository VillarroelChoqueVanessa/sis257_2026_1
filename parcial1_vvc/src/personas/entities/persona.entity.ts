import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('personas')
export class Persona {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('int')
  ci: number;

  @Column('varchar', { length: 50})
  nombres:string;

  @Column('varchar', { length: 100, name: 'primer_apellido' })
  primerApellido: string;

  @Column('varchar', { length: 100, name: 'segundo_apellido' })
  segundoApellido: string;

  @Column('date', { name: 'fecha_nacimiento' })
  fechaNacimiento: Date;
  
  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModicicaion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date;
}
