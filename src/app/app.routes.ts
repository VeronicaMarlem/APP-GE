import { RouterModule, Routes } from '@angular/router';

import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './inicio-sesion/registro.component';
import { NopagencontradaComponent } from './compartido/nopagencontrada/nopagencontrada.component';



const appRoutes: Routes = [
    { path: 'iniciosesion', component: InicioSesionComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', component: NopagencontradaComponent },
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
