import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RoomsComponent } from './rooms/rooms.component';
@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent implements OnInit {
   accomdationRoom1 = 'This is room 1';
  constructor(private router: Router, private matDialog: MatDialog) { }

  ngOnInit() {
  }
  // accom1(data) {
  //     console.log('data');
  //   // this.router.navigate(['/accomdation/rooms']);
  // }

  accom1() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(RoomsComponent, dialogConfig);
  }

}
