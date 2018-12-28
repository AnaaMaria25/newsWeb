import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { TextsComponent } from './texts/texts.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TextsComponent],
  imports: [
    CommonModule,
    InformationRoutingModule,
    SharedModule
  ]
})
export class InformationModule { }
