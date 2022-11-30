import { Component, Input } from '@angular/core';
import FaqItem from 'src/types/FaqItem';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss']
})

export class FaqItemComponent {
  @Input() faqItem = {} as FaqItem;
  isOpen = false;

  openFaqItemWrapperStyle = 'max-height: 100px; margin-block: 20px; padding-block: 25px';
  closedFaqItemWrapperStyle = 'max-height: 20px; margin-block: 0; padding-block: 20px';

  openFaqArrowStyle = 'transform: rotate(180deg) scale(0.7);';
  closedFaqArrowStyle = 'transform: rotate(0deg) scale(0.7);';

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
