import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthNationComponent } from './earth-nation.component';

describe('EarthNationComponent', () => {
  let component: EarthNationComponent;
  let fixture: ComponentFixture<EarthNationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarthNationComponent]
    });
    fixture = TestBed.createComponent(EarthNationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
