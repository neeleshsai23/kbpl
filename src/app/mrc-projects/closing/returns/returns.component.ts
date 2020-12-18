import { AddreturnComponent } from './addreturn/addreturn.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.scss']
})
export class ReturnsComponent implements OnInit {
  items=[
    {  "Date" : "9-Jun-2020","Type": "Electrical","Item_Name" : "Wires","Quantity" : "12","Recipient_Type" : "Main store","Recipient_Name": "ABC Limited","Status":"Done"},
    {  "Date" : "1-Dec-2019","Type": "Plumbing","Item_Name" : "Pipes","Quantity" : "25","Recipient_Type" : "Vendor","Recipient_Name": "John Limited","Status":"In Progress"},
    {  "Date" : "24-Jan-2016","Type": "Civil","Item_Name" : "Cement","Quantity" : "50","Recipient_Type" : "Sub Contractor","Recipient_Name": "STU Limited","Status":"Hold"},
    {  "Date" : "2-Sep-2019","Type": "Furniture","Item_Name" : "Tables","Quantity" : "20","Recipient_Type" : "Contractor","Recipient_Name": "Df Limited","Status":"Done"},
    {  "Date" : "15-Nov-2020","Type": "Electrical","Item_Name" : "Switches","Quantity" : "10","Recipient_Type" : "Main store","Recipient_Name": "DHL Limited","Status":"Pending"},
    ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openAdd() {
    let dialogRef = this.dialog.open(AddreturnComponent, {
      
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
