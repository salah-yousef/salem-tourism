import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { OurPackagesComponent } from './components/our-packages/our-packages.component';
import { BookWithUsComponent } from './components/book-with-us/book-with-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'packages', component: OurPackagesComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'book', component: BookWithUsComponent},
  {path: 'blog', component: OurBlogComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
