import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActualizarItemModule } from './actualizar-item/actualizar-item.module';
import { AgregarItemModule } from './agregar-item/agregar-item.module';
import { EliminarItemModule } from './eliminar-item/eliminar-item.module';
import { EditarItemModule } from './editar-item/editar-item.module';

import { IonicModule } from '@ionic/angular';

import { GestionPageRoutingModule } from './gestion-routing.module';

import { GestionPage } from './gestion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionPageRoutingModule
  ],
  declarations: [GestionPage]
})
export class GestionPageModule {}
