import { NgModule } from '@angular/core';
import { PAGINAS_ROUTES } from './paginas.routes';

import { CompartidoModule } from '../compartido/compartido.module';

import { PaginasComponent } from './paginas.component';

import { PrincipalComponent } from './principal/principal.component';



@NgModule({
    declarations: [
        PrincipalComponent,
        PaginasComponent
    ],
    exports: [
        PrincipalComponent
    ],
    imports: [
        CompartidoModule,
        PAGINAS_ROUTES
    ]
})
export class PaginasModule { }



