import {Component, Input, inject} from '@angular/core';
import {Producto} from "../../interfaces/product";
import {RouterLink} from "@angular/router";
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../servicios/carrito.service';
import { BaseDatosService } from '../../servicios/base-datos.service';


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
 private baseDatosService: BaseDatosService = inject(BaseDatosService);

  aniadirAlCarrito() {
    this.carritoService.aniadirAlCarrito(this.producto);
  }

  eliminarItemCarrito() {
    this.carritoService.eliminarItemCarrito(this.producto);
  }

  isInCart(): boolean {
    return this.carritoService.isInCart(this.producto);
  }
  eliminarProducto(): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.baseDatosService.eliminarProducto(this.producto.id_producto, this.producto.categoria).subscribe(
        () => {
          console.log('Producto eliminado correctamente');
          // Aquí puedes añadir cualquier lógica adicional después de eliminar el producto
        },
        (error) => {
          console.error('Error al eliminar el producto:', error);
        }
      );
    }
  }
}
