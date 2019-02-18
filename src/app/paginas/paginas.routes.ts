import { RouterModule, Routes } from '@angular/router';

import { PaginasComponent } from './paginas.component';
import { PrincipalComponent } from './principal/principal.component';

const paginasRoutes: Routes = [
    {
        path: '',
        component: PaginasComponent,
        children: [
            { path: 'principal', component: PrincipalComponent },
            { path: '', redirectTo: '/principal', pathMatch: 'full' },
        ]
    }
];

export const PAGINAS_ROUTES = RouterModule.forChild( paginasRoutes );
