import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGifComponent } from './home-gif.component';

describe('HomeGifComponent', () => {
  let component: HomeGifComponent;
  let fixture: ComponentFixture<HomeGifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGifComponent]
    });
    fixture = TestBed.createComponent(HomeGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
