import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, forkJoin} from "rxjs";
import {Producto} from "../interfaces/product";


@Injectable({
 providedIn: 'root'
})
export class ProductoService {
 url = 'https://fakestoreapi.com/products';
 constructor( private http: HttpClient ){
 }


 obtenerTodosLosProductos(): Observable<any[]> {
  const urls = [
    'http://localhost:3000/carnes',
    'http://localhost:3000/bebidas',
    'http://localhost:3000/cosmeticos',
    'http://localhost:3000/frutas_verduras',
    'http://localhost:3000/hogar',
    'http://localhost:3000/lacteos',
    'http://localhost:3000/panaderia',
    'http://localhost:3000/ropa',
    'http://localhost:3000/medicamentos',
    'http://localhost:3000/carnes',
    'http://localhost:3000/snacks'
  ];

  // Realizar las solicitudes HTTP y combinarlas con forkJoin
  const requests = urls.map(url => this.http.get<any[]>(url));

  return forkJoin(requests);

}
 obtenerProductoPorId(id: number){
   return this.http.get<Producto>(this.url+'/'+id)
 }
}