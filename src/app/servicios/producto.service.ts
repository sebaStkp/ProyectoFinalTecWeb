import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urls = [
    'http://localhost:3000/carnes',
    'http://localhost:3000/bebidas',
    'http://localhost:3000/cosmeticos',
    'http://localhost:3000/frutas_verduras',
    'http://localhost:3000/hogar',
    'http://localhost:3000/lacteos',
    'http://localhost:3000/panaderia',
    'http://localhost:3000/ropa',
    'http://localhost:3000/medicamentos',
    'http://localhost:3000/snacks'
  ];

  private url = 'http://localhost:3000/productos'; // URL base para productos individuales

  constructor(private http: HttpClient) {}

  obtenerTodosLosProductos(): Observable<Producto[]> {
    const requests = this.urls.map(url => this.http.get<Producto[]>(url));
    return forkJoin(requests).pipe(
      map((responses: Producto[][]) => responses.flat())
    );
  }

  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.url}/${id}`);
  }
}
