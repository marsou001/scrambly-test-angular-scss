import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsBarComponent } from './actions-bar.component';



@NgModule({
  declarations: [ActionsBarComponent],
  exports: [ActionsBarComponent],
  imports: [
    CommonModule
  ]
})
export class ActionsBarModule { }
