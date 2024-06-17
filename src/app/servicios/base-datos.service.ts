import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Producto } from '../interfaces/product';
import { ProductoService } from './producto.service';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {
  private urls: Record<string, string> = {
    Carne: 'http://localhost:3000/carnes',
    Bebida: 'http://localhost:3000/bebidas',
    Cosmetico: 'http://localhost:3000/cosmeticos',
    FrutaVerdura: 'http://localhost:3000/frutas_verduras',
    Hogar: 'http://localhost:3000/hogar',
    Lacteo: 'http://localhost:3000/lacteos',
    Panaderia: 'http://localhost:3000/panaderia',
    Ropa: 'http://localhost:3000/ropa',
    SaludMedicamento: 'http://localhost:3000/medicamentos',
    Snacks_Golosinas: 'http://localhost:3000/snacks'
  };
  listaDeProductos: Producto[] = [];

  constructor(private http: HttpClient, private productoService: ProductoService) {}

  ngOnInit(): void {
    // No es necesario implementar ngOnInit en un servicio
  }

  obtenerProductos(): void {
    this.productoService.obtenerTodosLosProductos().subscribe(
      (data: Producto[]) => {
        this.listaDeProductos = data;
      },
      error => {
        console.error('Error al obtener los productos', error);
        // Manejar el error de manera apropiada, por ejemplo, mostrando un mensaje al usuario
      }
    );
  }

  // Agregar un producto según su tipo
  agregarProducto(producto: Producto): Observable<Producto> {
    const url = this.getUrlByCategoria(producto.categoria);
    console.log(url)
    return this.http.post<Producto>(url, producto);
  }

  actualizarProducto(producto: Producto): Observable<Producto> {
    const url = `${this.getUrlByCategoria(producto.categoria)}/${producto.id_producto}`;
    return this.http.put<Producto>(url, producto).pipe(
      catchError((error) => {
        throw error; // Manejo básico de errores, ajusta según necesites
      })
    );
  }

  // Eliminar un producto según su tipo y ID
  eliminarProducto(id: number, categoria: string): Observable<any> {
    const url = `${this.getUrlByCategoria(categoria)}/${id}`;
    return this.http.delete(url).pipe(
      catchError((error) => {
        throw error; // Manejo básico de errores, ajusta según necesites
      })
    );
  }

  // Obtener productos por ID según su tipo
  obtenerProductoPorId(id: number, categoria: string): Observable<Producto> {
    const url = `${this.urls[categoria]}/${id}`;
    return this.http.get<Producto>(url);
  }

  // Obtener todos los productos de todos los tipos
  obtenerTodosLosProductos(): Observable<Producto[]> {
    const requests = Object.values(this.urls).map(url => this.http.get<Producto[]>(url));
    return forkJoin(requests).pipe(
      map((responses: Producto[][]) => responses.flat())
    );
  }

  // Obtener la URL según la categoría del producto
  private getUrlByCategoria(categoria: string): string {
    return this.urls[categoria];
  }
}
