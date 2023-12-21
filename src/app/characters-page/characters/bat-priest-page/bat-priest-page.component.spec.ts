import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatPriestPageComponent } from './bat-priest-page.component';

describe('BatPriestPageComponent', () => {
  let component: BatPriestPageComponent;
  let fixture: ComponentFixture<BatPriestPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatPriestPageComponent]
    });
    fixture = TestBed.createComponent(BatPriestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
