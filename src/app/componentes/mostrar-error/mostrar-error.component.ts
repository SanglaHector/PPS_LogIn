import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-error',
  templateUrl: './mostrar-error.component.html',
  styleUrls: ['./mostrar-error.component.scss'],
})
export class MostrarErrorComponent implements OnInit {
  @Input() mensajeError:string;
  @Input() color:string;
  constructor() { }

  ngOnInit() {}

}
