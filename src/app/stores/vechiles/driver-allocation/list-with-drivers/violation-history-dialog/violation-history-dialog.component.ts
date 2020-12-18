import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-violation-history-dialog',
  templateUrl: './violation-history-dialog.component.html',
  styleUrls: ['./violation-history-dialog.component.scss']
})
export class ViolationHistoryDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViolationHistoryDialogComponent>) { }

  ngOnInit() {
  }

  values = [
    {"category":"Over Speed","location":"Madhapur, Hyderabad","dt":"25-Nov-2020 12:45 P.M","penaltyno":"01202235","penaltyamount":"1000","paid":"1000","payment":"Cash","paiddt":"25-Nov-2020 13:10 P.M","reference":"DGU213545"},
    {"category":"Lane Out","location":"NH-8","dt":"25-Nov-2020 12:45 P.M","penaltyno":"01202235","penaltyamount":"1500","paid":"1500","payment":"Card","paiddt":"25-Nov-2020 13:10 P.M","reference":"DGU213545"}

  ]

  close(){
    this.dialogRef.close();
  }

}
