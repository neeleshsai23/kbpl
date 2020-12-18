import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-limit-history-dialog',
  templateUrl: './limit-history-dialog.component.html',
  styleUrls: ['./limit-history-dialog.component.scss']
})
export class LimitHistoryDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LimitHistoryDialogComponent>) { }

  ngOnInit() {
  }

  values = [
    {"date":"25-Nov-2020","normal":"150 Lts/100 KM","running":"150 Lts/100 KM","variation":"-","notification":"No"},
    {"date":"26-Nov-2020","normal":"150 Lts/100 KM","running":"165 Lts/100 KM","variation":"Yes","notification":"Yes"}

  ]

  close(){
    this.dialogRef.close();
  }

}
