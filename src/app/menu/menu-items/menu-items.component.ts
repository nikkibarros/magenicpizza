import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../@shared/pizza';
import { MiddlemanService } from '../../@shared/middleman.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {

  constructor(private middlemanService: MiddlemanService) { }

  pizzas = PIZZAS;

  onSelect(pizza: Pizza): void {
    this.middlemanService.changeSelectedPizza(pizza);
  }

  ngOnInit() {
  }

}

  const PIZZAS: Pizza[] = [
    { name: 'Hawaiian', ingredients: ['Ham', 'Bell Pepper', 'Pineapple'] },
    { name: 'Pepperoni', ingredients: ['Cheese', 'Pepperoni'] },
    { name: 'Garden Special', ingredients: ['Bell Pepper', 'Tomato', 'Onion'] }
  ];
