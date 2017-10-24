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
  regularPrice = 328;
  familyPrice = 515;
  partyPrice = 669;
  selectedPrice: any;

  onSelect(pizza: Pizza): void {
    this.middlemanService.changeSelectedPizza(pizza);
  }

  onSelectedRadioChange(price: number): void {
    this.middlemanService.changeSelectedSize(price);
  }

  ngOnInit() {
  }

}

  const PIZZAS: Pizza[] = [
    { name: 'Pepperoni', ingredients: ['Cheese', 'Pepperoni'], img: '/assets/images/pepperoni.jpg' },
    { name: 'Hawaiian', ingredients: ['Ham', 'Bell Pepper', 'Pineapple'], img: '/assets/images/hawaiian.jpg' },
    { name: 'Garden Special', ingredients: ['Bell Pepper', 'Tomato', 'Onion'], img: '/assets/images/garden_special.jpg' },
    { name: 'BBQ', ingredients: ['Boneless Pork Shoulder', 'Barbeque Sauce'], img: '/assets/images/bbq.jpg' },
    { name: 'Bacon Ranch', ingredients: ['Bacon', 'Ranch Dressing', 'Cheese'], img: '/assets/images/bacon_ranch.jpg' },
    { name: 'Texas Heat', ingredients: ['Chicken Breast', 'Bell Pepper', 'Cheese'], img: '/assets/images/texas_heat.jpg' },
    { name: 'Chicken BBQ', ingredients: ['Boneless Chicken Breast', 'Barbeque Sauce', 'Cheese'],
        img: '/assets/images/chicken_bbq.jpg' },
    { name: 'Four-Cheese', ingredients: ['Parmesan Cheese', 'Provolone Cheese', 'Cheddar Cheese', 'Monterey Jack Cheese'],
        img: '/assets/images/four_cheese.jpg' },
    { name: 'Bicol Express', ingredients: ['Pork Belly', 'Coconut Cream', 'Chili Pepper'], img: '/assets/images/bicol_express.jpg' }
  ];
