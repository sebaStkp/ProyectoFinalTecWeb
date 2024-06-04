import { Component, Input, inject } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Producto} from "../../interfaces/product";
import {ProductoService} from "../../servicios/producto.service";
import { AppComponent } from '../../app.component';


@Component({
 selector: 'app-detalles',
 standalone: true,
 imports: [],
 templateUrl: './detalles.component.html',
 styleUrl: './detalles.component.scss'
})
export class DetallesComponent {
 route: ActivatedRoute = inject(ActivatedRoute);
 productoService: ProductoService = inject(ProductoService);
 detalleProducto: Producto | undefined;

 appComponent:AppComponent=inject(AppComponent);
 constructor() {
  const idProducto = Number(this.route.snapshot.params['id']);
  // this.detalleProducto = this.productoService.obtenerProductoPorId(idProducto)
  this.productoService.obtenerProductoPorId(idProducto).subscribe(
    data => this.detalleProducto = data
  )
}

}
