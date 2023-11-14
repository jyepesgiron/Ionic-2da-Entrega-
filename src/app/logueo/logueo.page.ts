import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LogueoService } from '../Servicios/logueo.service';
import { AlertController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.page.html',
  styleUrls: ['./logueo.page.scss'],
})
export class LogueoPage implements OnInit {

  Registro: FormGroup;

  constructor(private enlace: Router, public fb: FormBuilder, private Logueo: LogueoService, public Alerta: AlertController) { 
    this.Registro = this.fb.group({
      'Email': new FormControl("", Validators.required),
      'Password': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async ingresar() {
    var datas = this.Registro.value;
    
    if(this.Registro.invalid){
      const alert = await this.Alerta.create({
        header: 'Información Insuficiente',
        message: 'Es obligatorio llenar todos los campos',
        buttons: ['OK'],
      });
  
      await alert.present();
      return;
    }
    else if(datas.Email == "Admon@got.com" && datas.Password == "Administracion2023"){
      this.enlace.navigate(['/Gestion']);
    }
    else{
      this.Logueo.LogIn(datas.Email, datas.Password).then( async (dato)=>{
        if(dato.data.token){
          console.log(dato.data.token);
          await Preferences.set({
            key: 'token',
            value: dato.data.token
          })
          console.log(dato);
          this.enlace.navigate(['/Funcion/registro']);
        }else{
          const alert = await this.Alerta.create({
            header: 'ERROR',
            message: 'Ja!.. Usted no está registrado',
            buttons: ['OK'],
          });
      
          await alert.present();
          return;
        }
      })      
    }
  }
}
