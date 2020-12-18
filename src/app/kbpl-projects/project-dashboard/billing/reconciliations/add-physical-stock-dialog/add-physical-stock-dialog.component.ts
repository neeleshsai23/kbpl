import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-add-physical-stock-dialog',
  templateUrl: './add-physical-stock-dialog.component.html',
  styleUrls: ['./add-physical-stock-dialog.component.scss']
})
export class AddPhysicalStockDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddPhysicalStockDialogComponent>) { }

  ngOnInit() {
  }

  values:any = [
    {date:"23-09-2020",uploaded:"Harpreet",counted:"Jaiswal",items:503,variance:7,loss:12},
    {date:"21-09-2020",uploaded:"Harpreet",counted:"Jaiswal",items:497,variance:25,loss:54},
    {date:"15-09-2020",uploaded:"Harpreet",counted:"Jaiswal",items:520,variance:10,loss:16},
    {date:"10-09-2020",uploaded:"Harpreet",counted:"Jaiswal",items:503,variance:7,loss:12},
    {date:"01-09-2020",uploaded:"Harpreet",counted:"Jaiswal",items:497,variance:25,loss:54},
    {date:"27-08-2020",uploaded:"Harpreet",counted:"Jaiswal",items:520,variance:10,loss:16}
  ]

  close(){
    this.dialogRef.close()
  }

}
