import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptShamblerPageComponent } from './crypt-shambler-page.component';

describe('CryptShamblerPageComponent', () => {
  let component: CryptShamblerPageComponent;
  let fixture: ComponentFixture<CryptShamblerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptShamblerPageComponent]
    });
    fixture = TestBed.createComponent(CryptShamblerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
