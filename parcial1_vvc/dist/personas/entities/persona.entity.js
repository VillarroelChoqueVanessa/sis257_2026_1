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
exports.Persona = void 0;
const typeorm_1 = require("typeorm");
let Persona = class Persona {
    id;
    ci;
    nombres;
    primerApellido;
    segundoApellido;
    fechaNacimiento;
    fechaCreacion;
    fechaModicicaion;
    fechaEliminacion;
};
exports.Persona = Persona;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", Number)
], Persona.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Persona.prototype, "ci", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    __metadata("design:type", String)
], Persona.prototype, "nombres", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100, name: 'primer_apellido' }),
    __metadata("design:type", String)
], Persona.prototype, "primerApellido", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100, name: 'segundo_apellido' }),
    __metadata("design:type", String)
], Persona.prototype, "segundoApellido", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fecha_nacimiento' }),
    __metadata("design:type", Date)
], Persona.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], Persona.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], Persona.prototype, "fechaModicicaion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion' }),
    __metadata("design:type", Date)
], Persona.prototype, "fechaEliminacion", void 0);
exports.Persona = Persona = __decorate([
    (0, typeorm_1.Entity)('personas')
], Persona);
//# sourceMappingURL=persona.entity.js.map