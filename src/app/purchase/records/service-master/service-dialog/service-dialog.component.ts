import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-service-dialog',
  templateUrl: './service-dialog.component.html',
  styleUrls: ['./service-dialog.component.scss']
})
export class ServiceDialogComponent implements OnInit {
  items1=[
    { "Date" : "14-Nov-2020","Vendor" :"P/s Equipments","Unit" : "10","Quote" : "100","MinQty" : "5","Accepted" : "Yes","PO" : "MRC/2424"},
    { "Date" : "20-Jun-2017","Vendor" :"LK Solutions","Unit" : "20","Quote" : "200","MinQty" : "4","Accepted" : "Yes","PO" : "MRC/6825"},
    { "Date" : "1-Sep-2029","Vendor" :" SP Equipments","Unit" : "10","Quote" : "300","MinQty" : "3","Accepted" : "Yes","PO" : "MRC/2472"},
    ]
  
  constructor(public dialogRef: MatDialogRef<ServiceDialogComponent>) { }

  ngOnInit() {
  }
  close(): void { 
    this.dialogRef.close();
  }

}
