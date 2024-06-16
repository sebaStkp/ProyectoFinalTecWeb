import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Producto } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {
  private apiUrl = 'https://fakestoreapi.com/products'; // URL de ejemplo, ajústala según tus necesidades

  constructor(private http: HttpClient) {}

  search(query: string): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiUrl).pipe(
      map(data => data.filter(item => item.nombre.toLowerCase().includes(query.toLowerCase())))
    );
  }
}