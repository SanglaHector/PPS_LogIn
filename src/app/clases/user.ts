
export class User {

    public mail:string;
    public clave:string;
    public nombre:string;
    public apellido:string;
    public id: string
  
    constructor(nombre:string,apellido:string,mail:string,clave:string,id:string) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.mail = mail;
      this.clave = clave;
      this.id = id;
    }
}// esta bien poner el user aca?