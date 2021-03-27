import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
//codigo que cualquier componente pueda llamar para hacer algo con la base d datos

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private Firestore: AngularFirestore) { }

  createDocument<tipo>(data: tipo,enlace:string){
    const itemCollection: AngularFirestoreCollection<tipo> =  this.Firestore.collection<tipo>(enlace);
    return itemCollection.add(data);
  }

  createIdDoc():string
  {
    return this.Firestore.createId();
  }
  getDoc<tipo>(path:string)//trae documento osea segundo de la columan
  {
    const doc:AngularFirestoreDocument<tipo>  = this.Firestore.doc(path);//retorna una promesa
    return doc.valueChanges();//retorna un observable-> se suscribe a un cambio. //base de datos en tiempo real
  }
  getCollection<tipo>(path:string)
  {
    const col:AngularFirestoreCollection<tipo> = this.Firestore.collection(path);
    return col.valueChanges();
  }
  /*getAllDoc(path:string)
  {
    const doc:AngularFirestoreDocument<tipo>[] = this.Firestore.
  }*/
}
