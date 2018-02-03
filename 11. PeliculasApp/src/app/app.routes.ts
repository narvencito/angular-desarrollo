import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component'

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: BusquedaComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);

