import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';
import { ContactanosComponent } from './paginas/contactanos/contactanos.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { DetallesComponent } from './paginas/detalles/detalles.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { LogginComponent } from './paginas/loggin/loggin.component';
import { FormularioProductoComponent } from './paginas/formulario-producto/formulario-producto.component';
import { ProductosComponent } from './productos/productos.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'tienda', component: TiendaComponent },
    { path: 'productos/:categoria', component: ProductosComponent },
    { path: 'detalles/:categoria/:id', component: DetallesComponent },
    { path: 'contactanos', component: ContactanosComponent },
    { path: 'loggin', component: LogginComponent },
    { path: '', redirectTo: 'loggin', pathMatch: 'full' },
    { path: 'buscar', component: BuscarComponent },
    { path: 'aniadir', component: FormularioProductoComponent },
    { path: '**', component: PaginaNoEncontradaComponent }

];
