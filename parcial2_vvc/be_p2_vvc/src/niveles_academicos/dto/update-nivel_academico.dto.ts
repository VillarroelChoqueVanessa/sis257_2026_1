import { PartialType } from '@nestjs/swagger';
import { CreateNivelAcademicoDto } from './create-nivel_academico.dto';

export class UpdateNivelAcademicoDto extends PartialType(
  CreateNivelAcademicoDto,
) {}
