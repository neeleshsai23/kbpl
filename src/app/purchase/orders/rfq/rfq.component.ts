import { ItemsrfqComponent } from './itemsrfq/itemsrfq.component';
import { AddrfqComponent } from './addrfq/addrfq.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-rfq',
  templateUrl: './rfq.component.html',
  styleUrls: ['./rfq.component.scss']
})
export class RfqComponent implements OnInit {
  items=[
    { "Date" : "12-Nov-2020","Reference" : "MRC/RFQ/123","Vendor": "Birla","Category":"Civil","Items" : "5","Sender" :"Parmeet","Remarks" :"Need Very Urgently","Status":"Approved"},
    { "Date" : "14-Jan-2013","Reference" : "MRC/RFQ/927","Vendor": "Reliance","Category":"Electrical","Items" : "5","Sender" :"John","Remarks" :"Need Very Urgently","Status":"Declined"},
    { "Date" : "18-Sep-2007","Reference" : "MRC/RFQ/282","Vendor": "Tata Steels","Category":"Furniture","Items" : "5","Sender" :"Jeswin","Remarks" :"Need Very Urgently","Status":"Approved"},
    { "Date" : "19-Nov-2020","Reference" : "MRC/RFQ/873","Vendor": "FCI","Category":"Plumbing","Items" : "5","Sender" :"Sam","Remarks" :"Need Very Urgently","Status":"Declined"},
    { "Date" : "12-Dec-2011","Reference" : "MRC/RFQ/682","Vendor": "HP","Category":"Electrical","Items" : "5","Sender" :"John","Remarks" :"Need Very Urgently","Status":"Approved"},
    ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  public openadd(){
    let dialogRef = this.dialog.open(AddrfqComponent, {
     
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  public openitems(){
    let dialogRef = this.dialog.open(ItemsrfqComponent, {
     
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
