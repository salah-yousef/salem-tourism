import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTestimonialsComponent } from './our-testimonials.component';

describe('OurTestimonialsComponent', () => {
  let component: OurTestimonialsComponent;
  let fixture: ComponentFixture<OurTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
