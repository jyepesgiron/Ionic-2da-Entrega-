import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { EliminarItemComponent } from './eliminar-item.component';
import { EliminarItemRoutingModule } from './eliminar-item-routing.module';

@NgModule({
  declarations: [EliminarItemComponent],
  imports: [BrowserModule, IonicModule.forRoot(), EliminarItemRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [EliminarItemComponent],
})
export class EliminarItemModule {}
