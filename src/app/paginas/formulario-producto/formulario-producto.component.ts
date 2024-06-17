import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Producto, Carne, Bebida, Cosmetico, FrutaVerdura, Hogar, Lacteo, Panaderia, Ropa, SaludMedicamento, SnackGolosina } from '../../interfaces/product';
import { BaseDatosService } from '../../servicios/base-datos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class FormularioProductoComponent implements OnInit {
  productoForm!: FormGroup;
  categorias: string[] = ['Carne', 'Bebida', 'Cosmetico', 'FrutaVerdura', 'Hogar', 'Lacteo', 'Panaderia', 'Ropa', 'SaludMedicamento', 'Snacks_Golosinas'];

  constructor(private fb: FormBuilder, private baseDatosService: BaseDatosService) {}

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      id_producto: [null],
      nombre: ['', Validators.required],
      precio: [0, Validators.required],
      categoria: ['', Validators.required],
      link: ['', Validators.required],
      tipo_carne: [''],
      peso: [''],
      fecha_expiracion: [''],
      volumen: [0],
      alcoholico: [false],
      tipo_cosmetico: [''],
      contenido: [0],
      tipo_producto: [''],
      origen: [''],
      cantidad: [0],
      fecha_elaboracion: [''],
      tipo_ropa: [''],
      talla: [''],
      dosis: [''],
      tipo_snack: ['']
    });
  }

  onSubmit(): void {
    const productoData = this.productoForm.value;
    let producto: Producto;

    switch (productoData.categoria) {
      case 'Carne':
        producto = { ...productoData } as Carne;
        break;
      case 'Bebida':
        producto = { ...productoData } as Bebida;
        break;
      case 'Cosmetico':
        producto = { ...productoData } as Cosmetico;
        break;
      case 'FrutaVerdura':
        producto = { ...productoData } as FrutaVerdura;
        break;
      case 'Hogar':
        producto = { ...productoData } as Hogar;
        break;
      case 'Lacteo':
        producto = { ...productoData } as Lacteo;
        break;
      case 'Panaderia':
        producto = { ...productoData } as Panaderia;
        break;
      case 'Ropa':
        producto = { ...productoData } as Ropa;
        break;
      case 'SaludMedicamento':
        producto = { ...productoData } as SaludMedicamento;
        break;
      case 'Snacks_Golosinas':
        producto = { ...productoData } as SnackGolosina;
        break;
      default:
        producto = { ...productoData } as Producto;
        break;
    }


  // const productoEditar = this.baseDatosService.getProductoEditar(); 
  // if (productoEditar) {
  //   this.productoForm.patchValue(productoEditar); 
  // }

    if (producto.id_producto) {
      // Actualizar producto existente
      this.baseDatosService.actualizarProducto(producto).subscribe(
        (productoActualizado) => {
          console.log('Producto actualizado:', productoActualizado);
        },
        (error) => {
          console.error('Error al actualizar producto:', error);
        }
      );
    } else {
      // Agregar nuevo producto
      this.baseDatosService.agregarProducto(producto).subscribe(
        (productoAgregado) => {
          console.log('Producto agregado:', productoAgregado);
        },
        (error) => {
          console.error('Error al agregar producto:', error);
        }
      );
    }
  }
}
