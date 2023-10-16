import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { RevisionComponent } from './revision.component';
import { RevisionRoutingModule } from './revision-routing.module';

@NgModule({
  declarations: [RevisionComponent],
  imports: [BrowserModule, IonicModule.forRoot(), RevisionRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [RevisionComponent],
})
export class RevisionModule {}
