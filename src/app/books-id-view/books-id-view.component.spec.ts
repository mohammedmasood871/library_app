import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksIdViewComponent } from './books-id-view.component';

describe('BooksIdViewComponent', () => {
  let component: BooksIdViewComponent;
  let fixture: ComponentFixture<BooksIdViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksIdViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksIdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
