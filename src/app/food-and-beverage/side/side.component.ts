import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  @Output() CloseSideNavigation = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onToggleClose() {
    this.CloseSideNavigation.emit();
}
}
