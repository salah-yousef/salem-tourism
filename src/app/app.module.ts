import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { BookWithUsComponent } from './components/book-with-us/book-with-us.component';
import { OurPackagesComponent } from './components/our-packages/our-packages.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { SubscribeWithUsComponent } from './components/subscribe-with-us/subscribe-with-us.component';
import { OurTestimonialsComponent } from './components/our-testimonials/our-testimonials.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { PagesBannerComponent } from './components/pages-banner/pages-banner.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeBannerComponent,
    OurServicesComponent,
    BookWithUsComponent,
    OurPackagesComponent,
    OurTeamComponent,
    SubscribeWithUsComponent,
    OurTestimonialsComponent,
    OurBlogComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    PagesBannerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
