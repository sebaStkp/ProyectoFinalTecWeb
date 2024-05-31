import {Component, Input, inject} from '@angular/core';
import {Producto} from "../../interfaces/product";
import {RouterLink} from "@angular/router";
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';


@Component({
 selector: 'app-producto',
 standalone: true,
 imports: [ RouterLink, CommonModule ],
 templateUrl: './producto.component.html',
 styleUrl: './producto.component.scss'
})
export class ProductoComponent {
 @Input() producto!: Producto;
 appComponent: AppComponent = inject(AppComponent);// para acceder al actual appConponent

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
