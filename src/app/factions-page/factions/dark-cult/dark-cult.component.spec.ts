import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkCultComponent } from './dark-cult.component';

describe('DarkCultComponent', () => {
  let component: DarkCultComponent;
  let fixture: ComponentFixture<DarkCultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarkCultComponent]
    });
    fixture = TestBed.createComponent(DarkCultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
