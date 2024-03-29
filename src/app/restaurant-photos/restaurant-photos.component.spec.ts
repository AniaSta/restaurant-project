import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPhotosComponent } from './restaurant-photos.component';

describe('RestaurantPhotosComponent', () => {
  let component: RestaurantPhotosComponent;
  let fixture: ComponentFixture<RestaurantPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
