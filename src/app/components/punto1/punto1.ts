import { Component } from '@angular/core';

interface Evento{
  nombre: string;
  descripcion: string;
  img: string;
}
@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})

export class Punto1 {
  //array de objetos
  eventos: Evento[]=[
    {
      nombre: 'Taller de analisis de datos con Python',
      descripcion: 'En este taller, aprenderás a analizar datos utilizando Python y sus bibliotecas populares como Pandas y Matplotlib.',
      img: 'assets/images/analisisDeDatos.jpg'
    },
    {
      nombre: 'Charla sobre seguridad informática',
      descripcion: 'En esta charla, exploraremos los conceptos fundamentales de la seguridad informática y las mejores prácticas para proteger tus sistemas y datos.',
      img: 'assets/images/Seguridad-Informatica.jpg'
    },
    {
      nombre: 'Masterclass de desarrollo web con Angular',
      descripcion: 'Aprende a construir aplicaciones web modernas con Angular, desde los conceptos básicos hasta técnicas avanzadas de desarrollo.',
      img: 'assets/images/masterClassAngular.jpg'
    },
    {
      nombre: 'Taller de inteligencia artificial',
      descripcion: 'En este taller, exploraremos los fundamentos de la inteligencia artificial y cómo aplicarla en proyectos prácticos utilizando herramientas como TensorFlow.',
      img: 'assets/images/ia.jpg'
    }
  ]
  indiceActual: number = 0;

  mostrarSiguienteEvento() {
    if (this.indiceActual < this.eventos.length - 1) {
      this.indiceActual++;
    } else {
      this.indiceActual = 0; //vuelve al primero
    }
  }

  mostrarEventoAnterior() {
    if (this.indiceActual > 0) {
      this.indiceActual--;
    } else {
      this.indiceActual = this.eventos.length - 1; //va al último
    }
  }
}

