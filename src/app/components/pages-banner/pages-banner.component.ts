import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-banner',
  templateUrl: './pages-banner.component.html',
  styleUrls: ['./pages-banner.component.css']
})
export class PagesBannerComponent implements OnInit, OnChanges{
  @Input() myInput: string;
  title: string;
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }
  ngOnChanges(): void{
    switch (this.myInput) {
      case '/about':
        this.title = 'About Us';
        break;
      case '/contact':
        this.title = 'Contact Us';
        break;
      case '/blog':
        this.title = 'Blog Home';
        break;
      case '/book':
        this.title = 'Book a Trip';
        break;

      default:
        this.title = 'Trip Packages';
        break;
    }

  }

  onClick() {
    this.router.navigateByUrl(this.myInput);
  }
}
