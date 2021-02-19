import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieBannerHeaderComponent } from './cookie-banner-header/cookie-banner-header.component';
import { CookieBannerAccordionComponent } from './cookie-banner-accordion/cookie-banner-accordion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToggleSwitchButtonComponent } from './toggle-switch-button/toggle-switch-button.component';



@NgModule({
  declarations: [
    AppComponent,
    CookieBannerHeaderComponent,
    CookieBannerAccordionComponent,
    ToggleSwitchButtonComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
