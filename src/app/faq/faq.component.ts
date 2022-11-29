import { Component } from '@angular/core';
import FaqItem from 'src/types/FaqItem';
import data from 'src/data/faqItems';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})

export class FaqComponent {
  faqItems: FaqItem[] = data;
}