import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { FirebaseService } from '../services/firebase.service';
import {Usuario} from '../interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public usuarios:Usuario[];
  public mostrar:boolean;
  public datosErroneos:boolean;
  public datos:string;
  public appComponent:AppComponent;
  public nombre:string;
  public apellido:string;
  public mail:string;
  public clave:string;
  public mensajeError:string;
  public colorFondo:string;

  constructor(public navCtrol: NavController, public firebaseService:FirebaseService) {
    this.mostrar = false;
    this.datos = "";
    this.usuarios = new Array();

  }
  ngOnInit():void{
    const path = 'usuarios/';
    var contador:number = 0;
    this.firebaseService.getCollection(path).subscribe(res=>{ //me suscrbo para recibir la informacion
      res.forEach(element => {
        contador ++;
        this.usuarios.push(
        {"nombre":element['nombre'],
        "apellido":element['apellido'],
        "mail":element['mail'],
        "clave":element['clave'],
        "id":contador.toString()});
      });
    }); 
  }
  findUsuario(mail:string)
  {
    var elemento:Usuario = {
      'apellido':'apellido',
      'nombre':'nombre',
      'mail':'mail',
      'clave':'clave'
    };
    this.usuarios.forEach(element => {
      
      if(mail == element['mail'])
      {
        elemento =  element;
      }
    });
    return elemento;
  } 
  MostrarDatos(nom: string, ap: string){
    
    if(this.mail == undefined)
    {
      this.datosErroneos = true;
      this.mostrar = false;
      this.mensajeError = 'Por favor, ingrese un mail ';
    }else{

      const element = this.findUsuario(this.mail.toLowerCase());
      if(element.nombre == 'nombre')
      {
        this.mostrar = false;
        this.datosErroneos = true;
        this.mensajeError = 'El mail: ' + this.mail + ' no esta registrado';
  
      }else{
        if(this.checkClave(this.clave,element))
        {
          this.mostrar = true;
          this.nombre = element.nombre;
          this.apellido = element.apellido;
          this.datosErroneos = false;
        }else{
          this.datosErroneos = true;
          this.mostrar = false;
          this.mensajeError = 'Clave incorrecta para el mail ' + this.mail;
        }
      }
    }
  }
  checkClave(clave:string,element:Usuario)
  {
    return (element['clave']==clave);
  }

  //sin uso
  guardar()//prueba
  {
    const path:string = 'usuarios/';
    var id:string = this.firebaseService.createIdDoc();
    console.log("esta es mi id: " , id);
    const usuarioPrueba:Usuario = {
      nombre: "Guni",
      apellido: "Sangla",
      mail: "guni22.22.22@hotmail.com",
      clave: "123456",
      id: id
    };

    this.firebaseService.createDocument<Usuario>(usuarioPrueba,path).then(res=>
      {
        console.log("Respuesta de Firebase: " , res); 
    }).catch(err =>
      {
        console.log("Respuesta de error Firebase: ",err)
      });
  }

}
