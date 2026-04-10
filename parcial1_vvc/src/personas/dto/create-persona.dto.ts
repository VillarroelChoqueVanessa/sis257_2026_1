import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreatePersonaDto {
  @IsDefined({ message: 'El Ci es obligatorio' })
  @IsInt({ message: 'El Ci debe ser un número entero' })
  readonly ci: number;

  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser un string' })
  @MaxLength(50, { message: 'El nombre no puede tener más de 50 caracteres' })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly nombres: string;

  @IsNotEmpty({ message: 'El primer apellido es obligatorio' })
  @IsString({ message: 'El primer apellido debe ser un string' })
  @MaxLength(100, {
    message: 'El primer apellido no puede tener más de 100 caracteres',
  })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly primerApellido: string;

  @IsNotEmpty({ message: 'El segundo apellido es obligatorio' })
  @IsString({ message: 'El segundo apellido debe ser un string' })
  @MaxLength(100, {
    message: 'El segundo apellido no puede tener más de 100 caracteres',
  })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly segundoApellido: string;

  @IsDefined({ message: 'La fecha de nacimiento es obligatoria' })
  @IsDateString(
    {},
    { message: 'La fecha de nacimiento debe ser una fecha válida' },
  )
  readonly fechaNacimiento: Date;
}
