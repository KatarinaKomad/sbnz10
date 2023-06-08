import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsViewComponent } from './plants-view.component';

describe('PlantsViewComponent', () => {
  let component: PlantsViewComponent;
  let fixture: ComponentFixture<PlantsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantsViewComponent]
    });
    fixture = TestBed.createComponent(PlantsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
