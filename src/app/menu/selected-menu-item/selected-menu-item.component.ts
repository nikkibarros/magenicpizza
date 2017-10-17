import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { Pizza } from '../../@shared/pizza';
import { MiddlemanService } from '../../@shared/middleman.service';

@Component({
  selector: 'app-selected-menu-item',
  templateUrl: './selected-menu-item.component.html',
  styleUrls: ['./selected-menu-item.component.css']
})
export class SelectedMenuItemComponent implements OnInit, OnDestroy {

  private destroyed$ = new Subject();
  pizza: Pizza;

  constructor(private middlemanService: MiddlemanService) { }

  ngOnInit() {
    this.middlemanService.selectedPizza$.takeUntil(this.destroyed$).subscribe(
      selectedPizza => this.pizza = selectedPizza
    );
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
