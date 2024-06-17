import {Component, Input, inject} from '@angular/core';
import {Producto} from "../../interfaces/product";
import {RouterLink} from "@angular/router";
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../servicios/carrito.service';


@Component({
 selector: 'app-producto',
 standalone: true,
 imports: [ RouterLink, CommonModule ],
 templateUrl: './producto.component.html',
 styleUrl: './producto.component.scss'
})
export class ProductoComponent {
 @Input() producto!: Producto;
 constructor(){
  
 }
 private carritoService: CarritoService = inject(CarritoService);

  aniadirAlCarrito() {
    this.carritoService.aniadirAlCarrito(this.producto);
  }

  eliminarItemCarrito() {
    this.carritoService.eliminarItemCarrito(this.producto);
  }

  isInCart(): boolean {
    return this.carritoService.isInCart(this.producto);
  }
}
