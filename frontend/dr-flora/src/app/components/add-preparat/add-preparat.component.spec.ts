import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPreparatComponent } from './add-preparat.component';

describe('AddPreparatComponent', () => {
  let component: AddPreparatComponent;
  let fixture: ComponentFixture<AddPreparatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPreparatComponent]
    });
    fixture = TestBed.createComponent(AddPreparatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
