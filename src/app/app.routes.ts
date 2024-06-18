import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { ContactanosComponent } from './paginas/contactanos/contactanos.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { DetallesComponent } from './paginas/detalles/detalles.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { LogginComponent } from './paginas/loggin/loggin.component';
import { FormularioProductoComponent } from './paginas/formulario-producto/formulario-producto.component';
export const routes: Routes = [
    { path: 'inicio', component: LogginComponent },
    { path: 'tienda', component: TiendaComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'contactanos', component: ContactanosComponent },
    { path: 'loggin', component: LogginComponent },
    { path: '', redirectTo: 'loggin', pathMatch: 'full' },
    { path: 'detalles/:id', component: DetallesComponent },
    { path: 'buscar', component: BuscarComponent },
    { path: 'aniadir', component: FormularioProductoComponent },
    { path: 'producto/editar/:id/:categoria', component: FormularioProductoComponent },
    { path: '**', component: PaginaNoEncontradaComponent }
];
