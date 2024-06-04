import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Producto, Rating } from './interfaces/product';
import { ProductoService } from './servicios/producto.service';
import { ProductoComponent } from './elementos/producto/producto.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule, CommonModule, ProductoComponent, CarritoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mi_tienda';
  searchControl: FormControl = new FormControl('');
  items: number = 0;
  carrito: Producto[] = [];
  productoService: ProductoService = inject(ProductoService);
  showShoppingDiv: boolean = false;

toggleShoppingDiv() {
  this.showShoppingDiv = !this.showShoppingDiv;
}

  constructor(private router: Router) {}

  onSearch() {
    const query = this.searchControl.value;
    if (query) {
      this.router.navigate(['/buscar'], { queryParams: { q: query } });
      
    }
  }
  añadirAlCarrito(producto: Producto) { 
    this.carrito.push(producto); // añado al carrito un producto
    this.items = this.carrito.length; // actualizo la cantidad de items en el boton de arriba del items
  }
  eliminarItemCarrito(producto: Producto) {
    const prodEncontrado = this.carrito.indexOf(producto); // indexOf es un metodo para arrays
    if (prodEncontrado > -1) { // devuelve -1 en caso que no encuentre el producto
      this.carrito.splice(prodEncontrado, 1); // splice es un metodo para eliminar un producto del array, 1 porque solo quiero eliminar 1 producto
    }
    this.items = this.carrito.length; // actualizo el contador de items
  }

  isInCart(producto: Producto): boolean {
    return this.carrito.includes(producto); // verifico que existe el producto en carrito, includes es como un isIn 
  }
  
  getCarrito(): Producto[]{
    return this.carrito;
  }
}
