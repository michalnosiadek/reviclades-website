import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldMapPageComponent } from './world-map-page.component';

describe('WorldMapPageComponent', () => {
  let component: WorldMapPageComponent;
  let fixture: ComponentFixture<WorldMapPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorldMapPageComponent]
    });
    fixture = TestBed.createComponent(WorldMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
