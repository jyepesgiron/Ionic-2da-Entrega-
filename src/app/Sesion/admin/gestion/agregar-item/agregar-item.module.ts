import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AgregarItemComponent } from './agregar-item.component';
import { AgregarItemRoutingModule } from './agregar-item-routing.module';

@NgModule({
  declarations: [AgregarItemComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AgregarItemRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AgregarItemComponent],
})
export class AgregarItemModule {}
