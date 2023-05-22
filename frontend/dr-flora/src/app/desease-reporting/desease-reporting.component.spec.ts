import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeseaseReportingComponent } from './desease-reporting.component';

describe('DeseaseReportingComponent', () => {
  let component: DeseaseReportingComponent;
  let fixture: ComponentFixture<DeseaseReportingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeseaseReportingComponent]
    });
    fixture = TestBed.createComponent(DeseaseReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
