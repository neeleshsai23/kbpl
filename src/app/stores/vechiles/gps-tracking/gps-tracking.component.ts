import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {GpsHistoryDialogComponent} from './gps-history-dialog/gps-history-dialog.component';

@Component({
  selector: 'app-gps-tracking',
  templateUrl: './gps-tracking.component.html',
  styleUrls: ['./gps-tracking.component.scss']
})
export class GpsTrackingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public pageSize = 4;
  public currentPage = 0;
  public totalSize = 0;

  values = [
    {"vehicleno":"DL1GC5038","equipment":"Bull Dozer","allocateduser":"Siva Kumar","gpsname":"Letstrack","current":"Madhapur, Hyderabad","previous":"Banjara Hills, Hyderabad"},
    {"vehicleno":"DL1GC5038","equipment":"Bull Dozer","allocateduser":"Dhawal Verma","gpsname":"Letstrack","current":"Palakkad, Kerala","previous":"Alphuzza, Kerala"}

  ]

  filterToggle:boolean = false;

  openGPSHistoryDialog(){
    this.dialog.open(GpsHistoryDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
