import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorantulanHunterPageComponent } from './gorantulan-hunter-page.component';

describe('GorantulanHunterPageComponent', () => {
  let component: GorantulanHunterPageComponent;
  let fixture: ComponentFixture<GorantulanHunterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GorantulanHunterPageComponent]
    });
    fixture = TestBed.createComponent(GorantulanHunterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
