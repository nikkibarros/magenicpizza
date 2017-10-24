import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartDeliveryComponent } from './shopping-cart-delivery.component';

describe('ShoppingCartDeliveryComponent', () => {
  let component: ShoppingCartDeliveryComponent;
  let fixture: ComponentFixture<ShoppingCartDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
