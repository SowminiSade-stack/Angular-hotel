import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-resort-and-activities',
  templateUrl: './resort-and-activities.component.html',
  styleUrls: ['./resort-and-activities.component.css']
})
export class ResortAndActivitiesComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  back() {
    this.location.back();
  }
}
