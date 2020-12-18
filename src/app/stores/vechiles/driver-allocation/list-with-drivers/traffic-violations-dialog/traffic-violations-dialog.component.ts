import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-traffic-violations-dialog',
  templateUrl: './traffic-violations-dialog.component.html',
  styleUrls: ['./traffic-violations-dialog.component.scss']
})
export class TrafficViolationsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TrafficViolationsDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
