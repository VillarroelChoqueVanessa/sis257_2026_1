import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateNivelAcademicoDto } from './dto/create-nivel_academico.dto';
import { UpdateNivelAcademicoDto } from './dto/update-nivel_academico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NivelAcademico } from './entities/nivel_academico.entity';

@Injectable()
export class NivelesAcademicosService {
  constructor(
    @InjectRepository(NivelAcademico)
    private nivelesacademicosRepository: Repository<NivelAcademico>,
  ) {}

  async create(
    createNivelesAcademicoDto: CreateNivelAcademicoDto,
  ): Promise<NivelAcademico> {
    let nivelesacademico = await this.nivelesacademicosRepository.findOneBy({
      nombre: createNivelesAcademicoDto.nombre.trim(),
      descripcion: createNivelesAcademicoDto.descripcion.trim(),
    });
    if (nivelesacademico)
      throw new ConflictException('El nivelesacademico ya existe');

    nivelesacademico = new NivelAcademico();
    Object.assign(nivelesacademico, createNivelesAcademicoDto);
    return this.nivelesacademicosRepository.save(nivelesacademico);
  }

  async findAll(): Promise<NivelAcademico[]> {
    return this.nivelesacademicosRepository.find({ order: { nombre: 'ASC' } });
  }

  async findOne(id: number): Promise<NivelAcademico> {
    const nivelesacademico = await this.nivelesacademicosRepository.findOneBy({
      id,
    });
    if (!nivelesacademico)
      throw new NotFoundException('El nivelesacademico no existe');
    return nivelesacademico;
  }

  
  async update(
    id: number,
    updateNivelesAcademicoDto: UpdateNivelAcademicoDto,
  ): Promise<NivelAcademico> {
    const nivelesacademico = await this.findOne(id);
    Object.assign(nivelesacademico, updateNivelesAcademicoDto);
    return this.nivelesacademicosRepository.save(nivelesacademico);
  }

  async remove(id: number): Promise<NivelAcademico> {
    const nivelesacademico = await this.findOne(id);
    return this.nivelesacademicosRepository.softRemove(nivelesacademico);
  }
}
