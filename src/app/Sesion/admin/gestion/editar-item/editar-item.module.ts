import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { EditarItemComponent } from './editar-item.component';
import { EditarItemRoutingModule } from './editar-item-routing.module';

@NgModule({
  declarations: [EditarItemComponent],
  imports: [BrowserModule, IonicModule.forRoot(), EditarItemRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [EditarItemComponent],
})
export class EditarItemModule {}
