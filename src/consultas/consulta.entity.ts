import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Consultas')
export class Consulta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombreMascota: string;

  @Column()
  especie: string;

  @Column()
  edad: number;

  @Column()
  nombreDueno: string;

  @Column()
  telefonoContacto: number;
  
  @Column()
  fechaconsulta: string;

  @Column()
  motivoConsulta: string;
  
  @Column()
  costoConsulta: number;

  @Column()
  estado: string;
}
