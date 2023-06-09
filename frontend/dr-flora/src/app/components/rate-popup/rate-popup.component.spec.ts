import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatePopupComponent } from './rate-popup.component';

describe('RatePopupComponent', () => {
  let component: RatePopupComponent;
  let fixture: ComponentFixture<RatePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatePopupComponent]
    });
    fixture = TestBed.createComponent(RatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
