import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightPilgrimsComponent } from './light-pilgrims.component';

describe('LightPilgrimsComponent', () => {
  let component: LightPilgrimsComponent;
  let fixture: ComponentFixture<LightPilgrimsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightPilgrimsComponent]
    });
    fixture = TestBed.createComponent(LightPilgrimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
