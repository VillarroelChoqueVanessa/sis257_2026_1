import { PersonasService } from './personas.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
export declare class PersonasController {
    private readonly personasService;
    constructor(personasService: PersonasService);
    create(createPersonaDto: CreatePersonaDto): Promise<import("./entities/persona.entity").Persona>;
    findAll(): Promise<import("./entities/persona.entity").Persona[]>;
    findOne(id: string): Promise<import("./entities/persona.entity").Persona>;
    update(id: string, updatePersonaDto: UpdatePersonaDto): Promise<import("./entities/persona.entity").Persona>;
    remove(id: string): Promise<import("./entities/persona.entity").Persona>;
}
