import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// rutas
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './inicio-sesion/registro.component';
import { NopagencontradaComponent } from './compartido/nopagencontrada/nopagencontrada.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { HeaderComponent } from './compartido/header/header.component';
import { SidebarComponent } from './compartido/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './compartido/breadcrumbs/breadcrumbs.component';
import { PaginasComponent } from './paginas/paginas.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    RegistroComponent,
    NopagencontradaComponent,
    PrincipalComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PaginasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
