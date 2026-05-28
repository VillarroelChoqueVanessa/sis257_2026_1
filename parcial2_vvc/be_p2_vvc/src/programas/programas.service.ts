import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Programa } from './entities/programa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProgramasService {
  constructor(
      @InjectRepository(Programa)
      private readonly progamaRepository: Repository<Programa>,
    ) {}
  
    async create(createProgamaeDto: CreateProgramaDto): Promise<Programa> {
      let progama = await this.progamaRepository.findOneBy({
        idNivelAcademico: createProgamaeDto.idNivelAcademico,
        nombre: createProgamaeDto.nombre,
      });
      if (progama)
        throw new ConflictException('El progama ya existe para ese nivel académico');
  
      progama = new Programa();
      Object.assign(progama, createProgamaeDto);
      return this.progamaRepository.save(progama);
    }
  
    async findAll(): Promise<Programa[]> {
      return this.progamaRepository.find({
        relations: { nivelesAcademicos: true },
        order: { nombre: 'ASC' },
      });
    }
  
    async findOne(id: number): Promise<Programa> {
      const progama = await this.progamaRepository.findOne({
        where: { id },
        relations: { nivelesAcademicos: true },
      });
      if (!progama) throw new NotFoundException('El progama no existe');
      return progama;
    }
  
    async findByNivelAcademico(idNivelAcademico: number): Promise<Programa[]> {
      return this.progamaRepository.find({
        where: { idNivelAcademico },
        order: { nombre: 'ASC' },
      });
    }
  
    async update(id: number, updateProgamaeDto: UpdateProgramaDto): Promise<Programa> {
      const progama = await this.findOne(id);
      Object.assign(progama, updateProgamaeDto);
      return this.progamaRepository.save(progama);
    }
  
    async remove(id: number) {
      const progama = await this.findOne(id);
      return this.progamaRepository.softRemove(progama);
    }
  }
  
  
