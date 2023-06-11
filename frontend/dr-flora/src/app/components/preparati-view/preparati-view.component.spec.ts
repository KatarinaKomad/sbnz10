import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparatiViewComponent } from './preparati-view.component';

describe('PreparatiViewComponent', () => {
  let component: PreparatiViewComponent;
  let fixture: ComponentFixture<PreparatiViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreparatiViewComponent]
    });
    fixture = TestBed.createComponent(PreparatiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
