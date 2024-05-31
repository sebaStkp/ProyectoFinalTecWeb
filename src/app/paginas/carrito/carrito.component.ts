import { Component, inject } from '@angular/core';
import { ProductoComponent } from '../../elementos/producto/producto.component';
import { Producto } from '../../interfaces/product';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [ProductoComponent, CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  items: number = 0;
  carrito: Producto[] = [];
  appComponent: AppComponent = inject(AppComponent);

  ngOnInit() { // se asignan valores en ngOnInit
    this.carrito = this.appComponent.getCarrito();
    this.items = this.carrito.length;
  }

}
