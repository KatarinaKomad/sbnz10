import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrationDialogComponent } from './concentration-dialog.component';

describe('ConcentrationDialogComponent', () => {
  let component: ConcentrationDialogComponent;
  let fixture: ComponentFixture<ConcentrationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcentrationDialogComponent]
    });
    fixture = TestBed.createComponent(ConcentrationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
