import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modificacion',
  templateUrl: './modificacion.component.html',
  styleUrls: ['./modificacion.component.scss'],
})
export class ModificacionComponent  implements OnInit {

  constructor(private alerta: AlertController) { }

  ngOnInit() {}

  async op(){
    const alert = await this.alerta.create({
      header: 'Rango',
      message: 'Seleccione el estado del AnteProyecto',
      buttons: [
        {
          text: 'Pendiente',
          handler: () => {
            console.log('Opción 1 seleccionada');
            // Realiza acciones específicas para la opción 1 aquí
          }
        },
        {
          text: 'Revisado',
          handler: () => {
            console.log('Opción 2 seleccionada');
            // Realiza acciones específicas para la opción 2 aquí
          }
        },
        {
          text: 'Aprovado',
          handler: () => {
            console.log('Opción 3 seleccionada');
            // Realiza acciones específicas para la opción 2 aquí
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        }
      ]
    });
  
    await alert.present();
  }

}
