import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MaterialUtilizadoComponent } from './material-utilizado/material-utilizado.component';

const APP_ROTAS: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: []},
  {path: 'material', component: MaterialUtilizadoComponent}
];

export const routing: ModuleWithProviders =  RouterModule.forRoot(APP_ROTAS);
