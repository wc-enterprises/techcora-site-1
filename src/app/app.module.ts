import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ScrollColorChange } from './common-utils/background-color-change-on-scroll.directive';
import { ScrollChangeColorDirective } from './scroll-change-color.directive';
import { AnimationStateService } from './common-utils/animation-state.service';
import { InternshipPosterComponent } from './internship-poster/internship-poster.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ScrollColorChange,
    ScrollChangeColorDirective,
    InternshipPosterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AnimationStateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
