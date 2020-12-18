import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-itemsdialog',
  templateUrl: './itemsdialog.component.html',
  styleUrls: ['./itemsdialog.component.scss']
})
export class ItemsdialogComponent implements OnInit {


  items=[
    {"number":"1","name":"Brick"},
    {"number":"2","name":"Steel"},
    {"number":"3","name":"Cement"},
    {"number":"4","name":"Stone"},
    {"number":"5","name":"Concrete"},
  ]
  constructor(public dialogRef: MatDialogRef<ItemsdialogComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}
