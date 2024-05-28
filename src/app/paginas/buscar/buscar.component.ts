import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Producto } from '../../interfaces/product';
import { ProductoComponent } from '../../elementos/producto/producto.component';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, ProductoComponent],
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  query: string = '';
  results: Producto[] = []; // Ajusta el tipo según la estructura de tus datos

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];
      this.search(this.query);
    });
  }

  search(query: string) {
    const url = `https://fakestoreapi.com/products`; // URL de ejemplo, ajústala según tus necesidades
    this.http.get<Producto[]>(url).subscribe((data) => {
      this.results = data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    });
  }
}
