import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Producto } from '../../interfaces/product';
import { ProductoComponent } from '../../elementos/producto/producto.component';
import { BuscarService } from '../../servicios/buscar.service';

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
  buscarService: BuscarService = inject(BuscarService)
  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];
      if(this.query.length == 0){
        this.router.navigate(['/tienda'])
      }
      this.search(this.query);
    });
  }

  search(query: string) {
    this.buscarService.search(query).subscribe((data)=>{
      this.results= data
    });
  }}
