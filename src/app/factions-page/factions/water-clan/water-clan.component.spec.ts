import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterClanComponent } from './water-clan.component';

describe('WaterClanComponent', () => {
  let component: WaterClanComponent;
  let fixture: ComponentFixture<WaterClanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterClanComponent]
    });
    fixture = TestBed.createComponent(WaterClanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
