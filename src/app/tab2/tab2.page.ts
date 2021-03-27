import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public nombre:string;
  public apellido:string;
  public mostrar:boolean;
  public direccion:string;

  constructor(public navCtrl: NavController) {
    this.mostrar=false;
  }

  MostrarDatos(nom: string, ap: string){
    
    this.nombre = nom;
    this.apellido = ap;
    this.mostrar = true;
  }
}
