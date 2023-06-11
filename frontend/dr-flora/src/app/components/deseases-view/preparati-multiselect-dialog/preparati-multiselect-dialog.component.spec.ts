import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparatiMultiselectDialogComponent } from './preparati-multiselect-dialog.component';

describe('PreparatiMultiselectDialogComponent', () => {
  let component: PreparatiMultiselectDialogComponent;
  let fixture: ComponentFixture<PreparatiMultiselectDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreparatiMultiselectDialogComponent]
    });
    fixture = TestBed.createComponent(PreparatiMultiselectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
