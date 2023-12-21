import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrimpMonkPageComponent } from './shrimp-monk-page.component';

describe('ShrimpMonkPageComponent', () => {
  let component: ShrimpMonkPageComponent;
  let fixture: ComponentFixture<ShrimpMonkPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShrimpMonkPageComponent]
    });
    fixture = TestBed.createComponent(ShrimpMonkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
