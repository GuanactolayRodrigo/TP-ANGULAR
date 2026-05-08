import { Injectable } from '@angular/core';
import { Inscripcion } from '../models/inscripcion.model';

@Injectable({
  providedIn: 'root'
})

export class InscripcionService {

  private inscripciones: Inscripcion[] = [];

  constructor() { }

  // CREATE
  agregarInscripcion(inscripcion: Inscripcion): void {

    inscripcion.id = this.inscripciones.length + 1;

    this.inscripciones.push(inscripcion);

  }

  // READ
  obtenerInscripciones(): Inscripcion[] {

    return this.inscripciones;

  }

  // DELETE
  eliminarInscripcion(id: number): void {

    this.inscripciones = this.inscripciones.filter(
      i => i.id !== id
    );

  }

  // UPDATE
  actualizarInscripcion(inscripcionActualizada: Inscripcion): void {

    const index = this.inscripciones.findIndex(
      i => i.id === inscripcionActualizada.id
    );

    if (index != -1) {

      this.inscripciones[index] = inscripcionActualizada;

    }

  }

  // RESUMEN
  obtenerTotalGeneral(): number {

    return this.inscripciones.reduce(
      (total, inscripcion) => total + inscripcion.precioFinal,
      0
    );

  }

}