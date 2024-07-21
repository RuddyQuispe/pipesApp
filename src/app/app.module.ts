import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


// configuracion de locale de la APP (formato de idioma de fechas, numeros y otros)
import localeEsBo from '@angular/common/locales/es-BO';
import localeEsHn from '@angular/common/locales/es-HN';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeEsBo);
registerLocaleData(localeEsHn);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    // confirguacion de asignacion de un idioma por defecto para fechas
    {provide: LOCALE_ID, useValue: 'es-BO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
