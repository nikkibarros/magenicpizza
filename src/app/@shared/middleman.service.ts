import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { Pizza } from './pizza';

@Injectable()
export class MiddlemanService {

  private selectedPizzaSubject: Subject<Pizza> = new Subject<Pizza>();
  public selectedPizza$ = this.selectedPizzaSubject.asObservable();

  constructor() { }

  changeSelectedPizza(selectedPizza): void {
    this.selectedPizzaSubject.next(selectedPizza);
  }

}
