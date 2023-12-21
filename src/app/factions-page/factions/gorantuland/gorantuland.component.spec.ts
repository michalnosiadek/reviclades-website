import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorantulandComponent } from './gorantuland.component';

describe('GorantulandComponent', () => {
  let component: GorantulandComponent;
  let fixture: ComponentFixture<GorantulandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GorantulandComponent]
    });
    fixture = TestBed.createComponent(GorantulandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
