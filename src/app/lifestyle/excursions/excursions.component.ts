import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.css']
})
export class ExcursionsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  back() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
