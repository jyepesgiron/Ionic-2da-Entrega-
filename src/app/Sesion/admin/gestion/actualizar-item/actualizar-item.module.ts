import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ActualizarItemComponent } from './actualizar-item.component';
import { ActualizarItemRoutingModule } from './actualizar-item-routing.module';

@NgModule({
  declarations: [ActualizarItemComponent],
  imports: [BrowserModule, IonicModule.forRoot(), ActualizarItemRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [ActualizarItemComponent],
})
export class ActualizarItemModule {}
