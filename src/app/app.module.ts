import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// RUTAS
import { APP_ROUTES } from './app.routes';

// MODULOS
import { PaginasModule } from './paginas/paginas.module';

// COMPONENTES
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './inicio-sesion/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTES,
    PaginasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
