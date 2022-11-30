import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { ActionsBarComponent } from './actions-bar/actions-bar.component';
import { HeroComponent } from './hero/hero.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FeaturesComponent } from './features/features.component';
import { FaqComponent } from './faq/faq.component';
import { FaqItemComponent } from './faq-item/faq-item.component';
import { SupportComponent } from './support/support.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionsBarComponent,
    HeroComponent,
    ReviewsComponent,
    FeaturesComponent,
    FaqComponent,
    FaqItemComponent,
    SupportComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
