import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
//aca pongo todas las bases de datos y en comills como se llaman las bases en Firestore
export class AppComponent {
  public usuarios: Observable<any[]>;
  constructor(db:AngularFirestore) { 
    this.usuarios = db.collection('usuarios').valueChanges();
  }
}
