import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionsPageComponent } from './factions-page.component';

describe('FactionsPageComponent', () => {
  let component: FactionsPageComponent;
  let fixture: ComponentFixture<FactionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactionsPageComponent]
    });
    fixture = TestBed.createComponent(FactionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
