import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';
export declare class PersonasService {
    private personasRepository;
    constructor(personasRepository: Repository<Persona>);
    create(createPersonaDto: CreatePersonaDto): Promise<Persona>;
    findAll(): Promise<Persona[]>;
    findOne(id: number): Promise<Persona>;
    update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<Persona>;
    remove(id: number): Promise<Persona>;
}
