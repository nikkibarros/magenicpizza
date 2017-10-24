import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { Pizza } from './pizza';

@Injectable()
export class MiddlemanService {

  private selectedPizzaSubject: Subject<Pizza> = new Subject<Pizza>();
  private selectedSizeSubject: Subject<number> = new Subject<number>();
  private addPizzaSubject: Subject<Pizza> = new Subject<Pizza>();

  public selectedPizza$ = this.selectedPizzaSubject.asObservable();
  public selectedSize$ = this.selectedSizeSubject.asObservable();
  public addPizza$ = this.addPizzaSubject.asObservable();

  constructor() { }

  changeSelectedPizza(selectedPizza): void {
    this.selectedPizzaSubject.next(selectedPizza);
  }

  changeSelectedSize(selectedSize): void {
    this.selectedSizeSubject.next(selectedSize);
  }

  addPizzaToShoppingCart(pizzaToAdd): void {
    this.addPizzaSubject.next(pizzaToAdd);
  }

}
