import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDateString, IsDefined, IsIn, IsInt, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateProgramaDto {
  @ApiProperty()
  @IsDefined({ message: 'El id de nivel academico es obligatorio' })
  @IsInt({ message: 'El id de nivel academico debe ser un número entero' })
  readonly idNivelAcademico: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MaxLength(100, { message: 'El nombre no puede tener mas de 100 caracteres' })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'La descripcion es obligatoria' })
  @IsString({ message: 'La descripcion debe ser una cadena de texto' })
  @MaxLength(2000, {
    message: 'La descripcion no puede tener mas de 2000 caracteres',
  })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly descripcion: string;

  @ApiProperty()
  @IsDefined({ message: 'La version es obligatoria' })
  @IsInt({ message: 'La version debe ser un número entero' })
  readonly version: number;

  @ApiProperty()
  @IsDefined({ message: 'La duración en meses es obligatoria' })
  @IsInt({ message: 'La duración en meses debe ser un número entero' })
  readonly duracionMeses: number;

  @ApiProperty()
  @IsDefined({ message: 'El costo es obligatorio' })
  @IsNumber({}, { message: 'El costo debe ser un número' })
  readonly costo: number;

  @ApiProperty()
  @IsDefined({ message: 'La fecha de inicio es obligatoria' })
  @IsDateString({}, { message: 'La fecha de lanzamiento debe ser una fecha válida' })
  readonly fechaInicio: Date;

  @ApiProperty({
    enum: ['En Planificación', 'En curso', 'Finalizado'],
  })
  @IsNotEmpty({ message: 'El estado es obligatorio' })
  @IsIn(['En Planificación', 'En curso', 'Finalizado'],)
  readonly estado: string;
}
