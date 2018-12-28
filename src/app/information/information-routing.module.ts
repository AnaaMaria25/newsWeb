import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextsComponent } from './texts/texts.component';

const routes: Routes = [
  {
    path: '',
    component: TextsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
