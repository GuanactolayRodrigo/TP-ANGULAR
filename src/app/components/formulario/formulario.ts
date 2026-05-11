import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Inscripcion } from '../models/inscripcion.model';
import { InscripcionService } from '../services/inscripcion.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})

export class Formulario {

  inscripcion: Inscripcion = new Inscripcion();
  inscripciones: Inscripcion[] = [];
  precioCalculado: number = 0;

  constructor(
    private inscripcionService: InscripcionService
  ) {
    this.inscripciones =
      this.inscripcionService.obtenerInscripciones();
      this.inscripcion.precio = 100000;
  }

  // CALCULAR DESCUENTO
  calcularPrecioFinal(): void {
    const precio = 100000; // Precio base fijo 
    const categoria = Number(this.inscripcion.categoriaAlumno);

    if (!precio || !categoria) {
      this.precioCalculado = 0;
      return;
    }

    switch (categoria) {
      case 1:
        this.precioCalculado = precio - (precio * 0.35);
        break;
      case 2:
        this.precioCalculado = precio - (precio * 0.50);
        break;
      case 3:
        this.precioCalculado = precio;
        break;
      default:
        this.precioCalculado = precio;
    }
  }

  // REGISTRAR
  registrar(): void {
    this.inscripcion.precioFinal =
      this.precioCalculado;
    this.inscripcion.fechaInscripcion =
      new Date();
    this.inscripcionService
      .agregarInscripcion(this.inscripcion);
    // refrescar lista
    this.inscripciones =
      this.inscripcionService.obtenerInscripciones();
    // limpiar formulario
    this.inscripcion = new Inscripcion();
    this.inscripcion.precio = 100000;
    this.precioCalculado = 0;
  }

  // Para mostrar el texto legible en la tabla
  obtenerNombreCategoria(cat: number): string {
    switch (Number(cat)) {
      case 1: return 'Estudiante';
      case 2: return 'Egresado';
      case 3: return 'Particular';
      default: return 'No asignado';
    }
  }

  // Para el resumen de inscripciones por categoría
  obtenerContadorPorCategoria(cat: number): number {
    return this.inscripciones.filter(i => Number(i.categoriaAlumno) === cat).length;
  }

  // Getter para obtener el total del service de forma limpia
  get totalGeneral(): number {
    return this.inscripcionService.obtenerTotalGeneral();
  }

  // Método para el botón de eliminar de la tabla
  eliminar(id: number): void {
    this.inscripcionService.eliminarInscripcion(id);
    this.inscripciones = this.inscripcionService.obtenerInscripciones();
  }

}