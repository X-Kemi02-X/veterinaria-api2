import { IsNumber, IsString } from 'class-validator';

export class CreateConsultaDto {
    @IsString()
    nombreMascota: string;
  
    @IsString()
    especie: string;
  
    @IsNumber()
    edad: number;
  
    @IsString()
    nombreDueno: string;
  
    @IsNumber()
    telefonoContacto: number;
    
    @IsString()
    fechaconsulta: string;
  
    @IsString()
    motivoConsulta: string;
    
    @IsNumber()
    costoConsulta: number;
  
    @IsString()
    estado: string;
}
