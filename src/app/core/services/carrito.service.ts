import { Injectable } from '@angular/core';
import { Carrito } from '../interfaces/carrito';
import { Producto } from '../interfaces/productos';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  constructor() {
    const memoria = localStorage.getItem('carrito');
    if (memoria) {
      this.carrito = JSON.parse(memoria);
    }
  }

  carrito: Carrito[] = [];

  agregarProducto(producto: Producto) {
    this.carrito.push({
      producto: producto,
      cantidad: 1,
    });
    this.actualizarLocalstorage();
  }

  eliminarProducto() {
    this.actualizarLocalstorage();
  }

  limpiarCarrito() {
    this.carrito = [];
    this.actualizarLocalstorage();
  }

  actualizarLocalstorage() {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  getTotal() {}
}
