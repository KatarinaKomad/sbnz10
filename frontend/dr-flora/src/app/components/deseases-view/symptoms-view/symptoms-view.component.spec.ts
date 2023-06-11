import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsViewComponent } from './symptoms-view.component';

describe('SymptomsViewComponent', () => {
  let component: SymptomsViewComponent;
  let fixture: ComponentFixture<SymptomsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SymptomsViewComponent]
    });
    fixture = TestBed.createComponent(SymptomsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
