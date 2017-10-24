import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { Pizza } from '../../@shared/pizza';
import { MiddlemanService } from '../../@shared/middleman.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, OnDestroy {

  private destroyed$ = new Subject();
  pizza: Pizza;

  constructor(private middlemanService: MiddlemanService) { }

  ngOnInit() {
    this.middlemanService.addPizza$.takeUntil(this.destroyed$).subscribe(
      pizzaToAdd => this.pizza = pizzaToAdd
    );
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
