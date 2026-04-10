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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePersonaDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreatePersonaDto {
    ci;
    nombres;
    primerApellido;
    segundoApellido;
    fechaNacimiento;
}
exports.CreatePersonaDto = CreatePersonaDto;
__decorate([
    (0, class_validator_1.IsDefined)({ message: 'El Ci es obligatorio' }),
    (0, class_validator_1.IsInt)({ message: 'El Ci debe ser un número entero' }),
    __metadata("design:type", Number)
], CreatePersonaDto.prototype, "ci", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser un string' }),
    (0, class_validator_1.MaxLength)(50, { message: 'El nombre no puede tener más de 50 caracteres' }),
    (0, class_transformer_1.Transform)(({ value }) => typeof value === 'string' ? value.trim() : value),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "nombres", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El primer apellido es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El primer apellido debe ser un string' }),
    (0, class_validator_1.MaxLength)(100, {
        message: 'El primer apellido no puede tener más de 100 caracteres',
    }),
    (0, class_transformer_1.Transform)(({ value }) => typeof value === 'string' ? value.trim() : value),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "primerApellido", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El segundo apellido es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El segundo apellido debe ser un string' }),
    (0, class_validator_1.MaxLength)(100, {
        message: 'El segundo apellido no puede tener más de 100 caracteres',
    }),
    (0, class_transformer_1.Transform)(({ value }) => typeof value === 'string' ? value.trim() : value),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "segundoApellido", void 0);
__decorate([
    (0, class_validator_1.IsDefined)({ message: 'La fecha de nacimiento es obligatoria' }),
    (0, class_validator_1.IsDateString)({}, { message: 'La fecha de nacimiento debe ser una fecha válida' }),
    __metadata("design:type", Date)
], CreatePersonaDto.prototype, "fechaNacimiento", void 0);
//# sourceMappingURL=create-persona.dto.js.map