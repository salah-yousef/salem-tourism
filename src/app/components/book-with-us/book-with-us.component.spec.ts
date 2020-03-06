import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookWithUsComponent } from './book-with-us.component';

describe('BookWithUsComponent', () => {
  let component: BookWithUsComponent;
  let fixture: ComponentFixture<BookWithUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookWithUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
