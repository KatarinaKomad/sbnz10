import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectDialogComponent } from './multiselect-dialog.component';

describe('MultiselectDropdownComponent', () => {
  let component: MultiselectDialogComponent;
  let fixture: ComponentFixture<MultiselectDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiselectDialogComponent]
    });
    fixture = TestBed.createComponent(MultiselectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
