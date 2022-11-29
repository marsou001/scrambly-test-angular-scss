import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';



@NgModule({
  declarations: [FeaturesComponent],
  exports: [FeaturesComponent],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
