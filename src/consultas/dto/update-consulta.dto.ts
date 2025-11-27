import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateConsultaDto {
    
    @IsString()
    @IsOptional()
    nombreMascota: string;
    
    @IsString()
    @IsOptional()
    especie: string;

    @IsNumber()
    @IsOptional()
    edad: number;

    @IsString()
    @IsOptional()
    nombreDueno: string;

    @IsNumber()
    @IsOptional()
    telefonoContacto: number;
    
    @IsString()
    @IsOptional()
    fechaconsulta: string;
  
    @IsString()
    @IsOptional()
    motivoConsulta: string;
    
    @IsNumber()
    @IsOptional()
    costoConsulta: number;
    
    @IsString()
    @IsOptional()
    estado: string;
}
