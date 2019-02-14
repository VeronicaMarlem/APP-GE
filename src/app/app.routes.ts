import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './paginas/principal/principal.component';

import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './inicio-sesion/registro.component';

import { NopagencontradaComponent } from './compartido/nopagencontrada/nopagencontrada.component';
import { PaginasComponent } from './paginas/paginas.component';


const appRoutes: Routes = [
    {
        path: '',
        component: PaginasComponent,
        children: [
            { path: 'principal', component: PrincipalComponent },
            { path: '', redirectTo: '/principal', pathMatch: 'full' },
        ]
    },
    { path: 'iniciosesion', component: InicioSesionComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', component: NopagencontradaComponent },
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
