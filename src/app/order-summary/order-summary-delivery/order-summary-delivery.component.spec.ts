import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryDeliveryComponent } from './order-summary-delivery.component';

describe('OrderSummaryDeliveryComponent', () => {
  let component: OrderSummaryDeliveryComponent;
  let fixture: ComponentFixture<OrderSummaryDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSummaryDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSummaryDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
