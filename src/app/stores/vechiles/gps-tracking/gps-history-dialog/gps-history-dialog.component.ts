import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-gps-history-dialog',
  templateUrl: './gps-history-dialog.component.html',
  styleUrls: ['./gps-history-dialog.component.scss']
})
export class GpsHistoryDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GpsHistoryDialogComponent>) { }

  ngOnInit() {
  }

  values = [
    {"date":"25-Nov-2020","origin":"Hyderabad","end":"Guntur","hours":"15:00","km":"250","updated":"25-Nov-2020 20:16 PM"},
    {"date":"26-Nov-2020","origin":"Hyderabad","end":"Warangal","hours":"10:00","km":"150","updated":"26-Nov-2020 18:16 PM"}
  ]

  close(){
    this.dialogRef.close();
  }

}
