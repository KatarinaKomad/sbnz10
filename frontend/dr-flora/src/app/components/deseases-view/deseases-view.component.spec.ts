import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeseasesViewComponent } from './deseases-view.component';

describe('DeseasesViewComponent', () => {
  let component: DeseasesViewComponent;
  let fixture: ComponentFixture<DeseasesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeseasesViewComponent]
    });
    fixture = TestBed.createComponent(DeseasesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
