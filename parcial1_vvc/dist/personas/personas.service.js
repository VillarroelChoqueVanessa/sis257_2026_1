"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const persona_entity_1 = require("./entities/persona.entity");
const typeorm_2 = require("typeorm");
let PersonasService = class PersonasService {
    personasRepository;
    constructor(personasRepository) {
        this.personasRepository = personasRepository;
    }
    async create(createPersonaDto) {
        let persona = await this.personasRepository.findOneBy({
            ci: createPersonaDto.ci,
            nombres: createPersonaDto.nombres,
            primerApellido: createPersonaDto.primerApellido,
            segundoApellido: createPersonaDto.segundoApellido
        });
        if (persona)
            throw new common_1.ConflictException('La persona ya existe');
        persona = new persona_entity_1.Persona();
        Object.assign(persona, createPersonaDto);
        return this.personasRepository.save(persona);
    }
    async findAll() {
        return this.personasRepository.find({ order: { nombres: 'ASC' } });
    }
    async findOne(id) {
        const persona = await this.personasRepository.findOneBy({ id });
        if (!persona)
            throw new common_1.NotFoundException('La persona no existe');
        return persona;
    }
    async update(id, updatePersonaDto) {
        const persona = await this.findOne(id);
        Object.assign(persona, updatePersonaDto);
        return this.personasRepository.save(persona);
    }
    async remove(id) {
        const persona = await this.findOne(id);
        return this.personasRepository.softRemove(persona);
    }
};
exports.PersonasService = PersonasService;
exports.PersonasService = PersonasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(persona_entity_1.Persona)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PersonasService);
//# sourceMappingURL=personas.service.js.map