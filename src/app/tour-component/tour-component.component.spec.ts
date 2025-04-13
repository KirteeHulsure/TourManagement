import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourComponentComponent } from './tour-component.component';

describe('TourComponentComponent', () => {
  let component: TourComponentComponent;
  let fixture: ComponentFixture<TourComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourComponentComponent]
    });
    fixture = TestBed.createComponent(TourComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
