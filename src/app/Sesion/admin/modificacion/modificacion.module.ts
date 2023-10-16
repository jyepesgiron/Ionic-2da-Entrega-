import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ModificacionComponent } from './modificacion.component';
import { ModificacionRoutingModule } from './modificacion-routing.module';

@NgModule({
  declarations: [ModificacionComponent],
  imports: [BrowserModule, IonicModule.forRoot(), ModificacionRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [ModificacionComponent],
})
export class ModificacionModule {}
