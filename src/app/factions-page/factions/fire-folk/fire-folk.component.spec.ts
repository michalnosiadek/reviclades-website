import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireFolkComponent } from './fire-folk.component';

describe('FireFolkComponent', () => {
  let component: FireFolkComponent;
  let fixture: ComponentFixture<FireFolkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FireFolkComponent]
    });
    fixture = TestBed.createComponent(FireFolkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
