import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartographerPageComponent } from './cartographer-page.component';

describe('CartographerPageComponent', () => {
  let component: CartographerPageComponent;
  let fixture: ComponentFixture<CartographerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartographerPageComponent]
    });
    fixture = TestBed.createComponent(CartographerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
