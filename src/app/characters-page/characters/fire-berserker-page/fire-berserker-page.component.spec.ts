import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireBerserkerPageComponent } from './fire-berserker-page.component';

describe('FireBerserkerPageComponent', () => {
  let component: FireBerserkerPageComponent;
  let fixture: ComponentFixture<FireBerserkerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FireBerserkerPageComponent]
    });
    fixture = TestBed.createComponent(FireBerserkerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
