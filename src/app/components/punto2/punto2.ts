import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

interface Producto {
  nombre: string;
  descripcion: string;
  img: string;
  precio: number;
}

interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css'
})
export class Punto2 {
  productos: Producto[] = [
    { nombre: 'Fuente 500w 80 Plus Bronze', descripcion: 'Fuente de poder 500W con certificación 80 Plus Bronze', img: 'assets/images/fuente.jpg', precio: 350000.00 },
    { nombre: 'Gabinete Gamer Corsair', descripcion: 'Gabinete para gaming con ventiladores incluidos', img: 'assets/images/gabinete.jpg', precio: 100000.00 },
    { nombre: 'Monitor GTEK', descripcion: 'Monitor LED de 14 pulgadas con resolución Full HD', img: 'assets/images/monitor.jpg', precio: 250000.00 },
    { nombre: 'Monitor PREDATOR', descripcion: 'Monitor LED curvo de 15 pulgadas con resolución HD', img: 'assets/images/monitor2.jpg', precio: 350000.00 },
    { nombre: 'Teclado Mecanico', descripcion: 'Teclado mecanico con retroiluminación RGB', img: 'assets/images/teclado.jpg', precio: 87000.00 },
    { nombre: 'Mouse Gamer', descripcion: 'Mouse ergonómico con alta precisión para gaming', img: 'assets/images/mouse.jpg', precio: 23000.00 },
  ];

  carrito: ItemCarrito[] = [];

  agregarAlCarrito(prod: Producto) {
    const itemExistente = this.carrito.find(item => item.producto.nombre === prod.nombre);
    if (itemExistente) {
      itemExistente.cantidad++; 
    } else {
      this.carrito.push({ producto: prod, cantidad: 1 });
    }
  }

  obtenerCantidadTotal(): number {
    return this.carrito.reduce((acc, item) => acc + item.cantidad, 0);
  }

  sumarCantidad(item: ItemCarrito) {
    item.cantidad++;
  }

  restarCantidad(item: ItemCarrito) {
    if (item.cantidad > 1) {
      item.cantidad--; 
    } else {
      this.carrito = this.carrito.filter(i => i !== item);
    }
  }

  calcularTotal(): number {
    let total = 0;
    for (let item of this.carrito) {
      total += item.producto.precio * item.cantidad;
    }
    return total;
  }
}
