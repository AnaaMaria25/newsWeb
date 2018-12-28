import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';
import { PruebaListComponent } from './prueba-list/prueba-list.component';

@NgModule({
  declarations: [PruebaListComponent],
  imports: [
    CommonModule,
    PruebaRoutingModule
  ]
})
export class PruebaModule { }
