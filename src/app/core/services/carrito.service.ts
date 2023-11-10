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
      this.getTotal();
    }
  }

  carrito: Carrito[] = [];
  totalCarrito: number = 0;

  modificarCantidadProducto(idProducto:number, cantidadACambiar:number){
    const index = this.carrito.findIndex(
      (item) => item.producto.id === idProducto
    );
    if (index > -1) {
      this.carrito[index].cantidad = cantidadACambiar; ;
    }
    this.actualizarLocalstorage(); 
    this.getTotal();
  }

  agregarProducto(producto: Producto, cantidad: number) {
    const index = this.carrito.findIndex(
      item => item.producto.id === producto.id
    );
    if (index > -1) {
      this.carrito[index].cantidad++;
    } else {
      this.carrito.push({
        producto: producto,
        cantidad: cantidad,
      });
    }
    this.actualizarLocalstorage();
    this.getTotal();
  }

  eliminarProducto(id: number) {
    this.carrito = this.carrito.filter((item) => item.producto.id !== id);
    this.actualizarLocalstorage();
    this.getTotal();
  }

  limpiarCarrito() {
    this.carrito = [];
    this.actualizarLocalstorage();
    this.getTotal();
  }

  actualizarLocalstorage() {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  getTotal() {
    this.totalCarrito = 0;
    this.carrito.forEach((item) => {
      this.totalCarrito =
        this.totalCarrito + item.producto.precio * item.cantidad;
    });
  }

  generarMensaje() {
    const primeraParte = 'https://wa.me/+5412345678?text=';
    let parteProductos = '';
    this.carrito.forEach((itemCarrito) => {
      parteProductos += `* ${itemCarrito.producto.nombre} - ${itemCarrito.cantidad}`;
    });
    const ultimaParte = `Se realizó el siguiente pedido:
  Productos:
  ${parteProductos}
  Total: $${this.totalCarrito}
  Dirección de envío: DIRECCION DE EJEMPLO`;
    return encodeURI(primeraParte + ultimaParte);
  }
}
