import { Component, Input, inject } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Producto} from "../../interfaces/product";
import {ProductoService} from "../../servicios/producto.service";
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';


@Component({
 selector: 'app-detalles',
 standalone: true,
 imports: [CommonModule],
 templateUrl: './detalles.component.html',
 styleUrl: './detalles.component.scss'
})
export class DetallesComponent {
 route: ActivatedRoute = inject(ActivatedRoute);
 productoService: ProductoService = inject(ProductoService);
 detalleProducto: Producto | undefined;

 appComponent:AppComponent=inject(AppComponent);
 @Input() producto!: Producto;
 constructor() {
  const idProducto = Number(this.route.snapshot.params['id']);
  this.productoService.obtenerProductoPorId(idProducto).subscribe(
    data => this.detalleProducto = data
  )
}
aniadirAlCarrito() {
  if (!this.appComponent.isInCart(this.producto)) {
      this.appComponent.añadirAlCarrito(this.producto);
  }
}
eliminarItemCarrito() {
  if (this.appComponent.isInCart(this.producto)) {
      this.appComponent.eliminarItemCarrito(this.producto);
}
}
isInCart(): boolean {
  return this.appComponent.isInCart(this.producto); // verifico que este en el carrito para manipular los botones
}

}
