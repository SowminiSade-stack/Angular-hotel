import { Component, OnInit,  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-food-and-beverage',
  templateUrl: './food-and-beverage.component.html',
  styleUrls: ['./food-and-beverage.component.css']
})
export class FoodAndBeverageComponent implements OnInit {
  @Output() SideNavigationToggle = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onToggleOpenSidenav() {
    this.SideNavigationToggle.emit();
 }
}
