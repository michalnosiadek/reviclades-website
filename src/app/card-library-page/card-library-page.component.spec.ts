import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLibraryPageComponent } from './card-library-page.component';

describe('CardLibraryPageComponent', () => {
  let component: CardLibraryPageComponent;
  let fixture: ComponentFixture<CardLibraryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLibraryPageComponent]
    });
    fixture = TestBed.createComponent(CardLibraryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
