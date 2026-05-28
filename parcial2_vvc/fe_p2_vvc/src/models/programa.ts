import type { NivelAcademico } from './nivel_academico'

export interface Programa {
  id: number
  idNivelAcademico: number
  nombre: string
  descripcion: string
  version: number
  duracionMeses: number
  costo: number
  fechaInicio: Date | string
  estado: 'En Planificación' | 'En curso' | 'Finalizado'
  nivelesAcademicos: NivelAcademico
}
