import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarErrorComponent } from './mostrar-error/mostrar-error.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MostrarErrorComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    MostrarErrorComponent
  ]
})
export class ComponentesModule { }
