import { Component, inject } from '@angular/core';
import {ProductoComponent} from "../../elementos/producto/producto.component";
import {Producto} from "../../interfaces/product";
import {ProductoService} from "../../servicios/producto.service";

@Component({
 selector: 'app-tienda',
 standalone: true,
 imports: [
   ProductoComponent
 ],
 templateUrl: './tienda.component.html',
 styleUrl: './tienda.component.scss'
})
export class TiendaComponent {
  listaDeProductos: Producto[] = [];
  productoService: ProductoService = inject(ProductoService);

  
  constructor() {
    this.productoService.obtenerTodosLosProductos().subscribe(
      data => this.listaDeProductos = data)
  
}


}