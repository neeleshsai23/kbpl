import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-items-dialog',
  templateUrl: './items-dialog.component.html',
  styleUrls: ['./items-dialog.component.scss']
})
export class ItemsDialogComponent implements OnInit {

  items=[
    { "Description" : "Regarding the SubContract","Unit" : "Qtls","Rate" : "1000","Plan_Qty" : "170","Billed_Qty" : "100","Approved_Qty" : "90", "Billed_Amount" : "100,000","Paid_Amount" : "50000","Remarks" : "Quantity,Price Details","Status" : "Active"},
    { "Description" : "Regarding the SubContract","Unit" : "Qtls","Rate" : "1000","Plan_Qty" : "100","Billed_Qty" : "50","Approved_Qty" : "50", "Billed_Amount" : "50,000","Paid_Amount" : "50000","Remarks" : "Quantity,Price Details","Status" : "Active"},
    { "Description" : "Regarding the SubContract","Unit" : "Qtls","Rate" : "1000","Plan_Qty" : "170","Billed_Qty" : "100","Approved_Qty" : "90", "Billed_Amount" : "100,000","Paid_Amount" : "60000","Remarks" : "Quantity,Price Details","Status" : "Active"},
    { "Description" : "Regarding the SubContract","Unit" : "Qtls","Rate" : "1000","Plan_Qty" : "200","Billed_Qty" : "100","Approved_Qty" : "90", "Billed_Amount" : "100,000","Paid_Amount" : "75000","Remarks" : "Quantity,Price Details","Status" : "Active"},

    ]
  constructor(public dialogRef: MatDialogRef<ItemsDialogComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
 
}
