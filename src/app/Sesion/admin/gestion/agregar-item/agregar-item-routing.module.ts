import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AgregarItemComponent } from './agregar-item.component';

const routes: Routes = [
  {
    path: '',
    component: AgregarItemComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AgregarItemRoutingModule { }