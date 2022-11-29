import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqItemComponent } from './faq-item.component';

@NgModule({
  declarations: [FaqItemComponent],
  exports: [FaqItemComponent],
  imports: [
    CommonModule,
  ]
})
export class FaqItemModule { }
