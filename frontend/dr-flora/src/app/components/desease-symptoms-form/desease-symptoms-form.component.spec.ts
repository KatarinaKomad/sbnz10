import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeseaseSymptomsFormComponent } from './desease-symptoms-form.component';

describe('DeseaseSymptomsFormComponent', () => {
  let component: DeseaseSymptomsFormComponent;
  let fixture: ComponentFixture<DeseaseSymptomsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeseaseSymptomsFormComponent]
    });
    fixture = TestBed.createComponent(DeseaseSymptomsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
