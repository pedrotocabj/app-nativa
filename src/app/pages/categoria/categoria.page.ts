import { Component, OnInit } from '@angular/core';
import { CATEGORIAS } from "../../core/constants/categorias";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


 categorias = CATEGORIAS;
 categoriaActual = this.categorias[3]

}
