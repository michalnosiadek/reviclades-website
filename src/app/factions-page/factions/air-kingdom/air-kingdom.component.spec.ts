import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirKingdomComponent } from './air-kingdom.component';

describe('AirKingdomComponent', () => {
  let component: AirKingdomComponent;
  let fixture: ComponentFixture<AirKingdomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirKingdomComponent]
    });
    fixture = TestBed.createComponent(AirKingdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
