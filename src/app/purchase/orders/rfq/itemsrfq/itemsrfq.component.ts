import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-itemsrfq',
  templateUrl: './itemsrfq.component.html',
  styleUrls: ['./itemsrfq.component.scss']
})
export class ItemsrfqComponent implements OnInit {
  items=[
    {"S":"1","Item" : "Pipes","Unit" : "Pcs","Qty" : "7","Rate":"9000","Amount":"63000"},
    {"S":"2","Item" : "Tables","Unit" : "Pcs","Qty" : "9","Rate":"4000","Amount":"36000"},
    {"S":"3","Item" : "Switches","Unit" : "Pcs","Qty" : "2","Rate":"20000","Amount":"40000"},
    {"S":"4","Item" : "Cement","Unit" : "Pcs","Qty" : "5","Rate":"10000","Amount":"50000"},
    {"S":"5","Item" : "Fans","Unit" : "Pcs","Qty" : "3","Rate":"25000","Amount":"75000"},
    ]
  constructor(public dialogRef: MatDialogRef<ItemsrfqComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
}
