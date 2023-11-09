import { Component } from '@angular/core';
import { CarritoService } from '../core/services/carrito.service';
import { Producto } from '../core/interfaces/productos';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    public carritoService: CarritoService
  ) {}

  producto: Producto = {
    id: 0,
    nombre: '',
    precio: 0,
    ingredientes: [],
    imagen: '',
  };

onVaciarCarritoClicked(){
  this.carritoService.limpiarCarrito()
}

cambiarCantidad(cantidad:number, idProducto:number){
  
}
}
