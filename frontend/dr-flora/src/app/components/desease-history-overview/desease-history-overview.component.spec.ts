import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeseaseHistoryOverviewComponent } from './desease-history-overview.component';

describe('DeseaseHistoryOverviewComponent', () => {
  let component: DeseaseHistoryOverviewComponent;
  let fixture: ComponentFixture<DeseaseHistoryOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeseaseHistoryOverviewComponent]
    });
    fixture = TestBed.createComponent(DeseaseHistoryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
