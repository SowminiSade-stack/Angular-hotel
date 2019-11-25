import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-wellness-and-spa',
  templateUrl: './wellness-and-spa.component.html',
  styleUrls: ['./wellness-and-spa.component.css']
})
export class WellnessAndSpaComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  back() {
    this.location.back();
  }
}
