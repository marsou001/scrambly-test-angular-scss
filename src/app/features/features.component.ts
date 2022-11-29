import { Component } from '@angular/core';
import data from 'src/data/features';
import Feature from 'src/types/feature';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  features: Feature[] = data;
}
