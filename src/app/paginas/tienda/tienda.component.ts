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

  
  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.obtenerTodosLosProductos().subscribe(
      (data: Producto[][]) => {
        // Concatenar todos los arrays de productos en uno solo
        this.listaDeProductos = data.reduce((acc, array) => acc.concat(array), []);
        console.log(data);
      },
      error => {
        console.error('Error al obtener los productos', error);
        // Manejar el error de manera apropiada, por ejemplo, mostrando un mensaje al usuario
      }
    );
  }

  actualizarProductos(productosNew: Producto[]): void {
    this.listaDeProductos = productosNew;
  }

  getProductosActuales(): Producto[] {
    return this.listaDeProductos;
  }
}