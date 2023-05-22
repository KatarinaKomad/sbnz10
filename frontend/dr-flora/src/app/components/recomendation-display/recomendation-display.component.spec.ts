import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendationDisplayComponent } from './recomendation-display.component';

describe('RecomendationDisplayComponent', () => {
  let component: RecomendationDisplayComponent;
  let fixture: ComponentFixture<RecomendationDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecomendationDisplayComponent]
    });
    fixture = TestBed.createComponent(RecomendationDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
