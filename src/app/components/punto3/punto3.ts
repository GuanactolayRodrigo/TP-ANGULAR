import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css'
})
export class Punto3 {

  cartas: any[] = [];

  cartasSeleccionadas: any[] = [];

  juegoIniciado: boolean = false;

  puedeJugar: boolean = false;

  intentos: number = 10;

  imagenTapada: string = 'assets/images/tapada.jpeg';

  imagenes = [
    'assets/images/cat1.jpeg',
    'assets/images/cat2.jpeg',
    'assets/images/cat3.jpeg',
    'assets/images/cat4.jpeg',
    'assets/images/cat5.jpeg',
    'assets/images/cat6.jpeg'
  ];

  iniciarJuego() {

    this.intentos = 10;

    this.juegoIniciado = true;

    this.puedeJugar = false;

    this.cartasSeleccionadas = [];

    let pares = [...this.imagenes, ...this.imagenes];

    pares = pares.sort(() => Math.random() - 0.5);

    this.cartas = pares.map((imagen) => ({
      imagen: imagen,
      volteada: false,
      encontrada: false
    }));
  }

  habilitarIntento() {

    if (this.intentos > 0) {
      this.puedeJugar = true;
    }

  }

  seleccionarCarta(carta: any) {

    if (!this.puedeJugar) return;

    if (carta.volteada || carta.encontrada) return;

    if (this.cartasSeleccionadas.length >= 2) return;

    carta.volteada = true;

    this.cartasSeleccionadas.push(carta);

    if (this.cartasSeleccionadas.length == 2) {

      this.verificarPareja();

    }

  }

  verificarPareja() {

    const [carta1, carta2] = this.cartasSeleccionadas;

    if (carta1.imagen === carta2.imagen) {

      carta1.encontrada = true;
      carta2.encontrada = true;

      this.cartasSeleccionadas = [];

      this.puedeJugar = false;

      this.verificarVictoria();

    } else {

      this.intentos--;

      setTimeout(() => {

        carta1.volteada = false;
        carta2.volteada = false;

        this.cartasSeleccionadas = [];

      }, 1000);

      this.puedeJugar = false;

      if (this.intentos <= 0) {

        alert('PERDISTE');

      }

    }

  }

  verificarVictoria() {

    const gano = this.cartas.every(c => c.encontrada);

    if (gano) {

      alert('GANASTE 🎉');

    }

  }

  reiniciarJuego() {

    this.cartas = [];

    this.cartasSeleccionadas = [];

    this.juegoIniciado = false;

    this.puedeJugar = false;

    this.intentos = 10;

  }

}