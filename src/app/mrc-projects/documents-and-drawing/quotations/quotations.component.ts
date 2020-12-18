import { AddRfqComponent } from './add-rfq/add-rfq.component';
import { ShowDocsItemsComponent } from './show-docs-items/show-docs-items.component';
import { ShowDocsComponent } from '../../../shared/show-docs/show-docs.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss']
})
export class QuotationsComponent implements OnInit {
  items: any =[
    {date:"13/09/2020 21:54:02",subject:"For the attention of Financial Manager",sender:"Parmeet",recipient:"Aman",status:"Draft",remarks:"Regarding the Financials",vendor:"M/s Power Solutions"   },
    {date:"15/10/2020 12:22:42",subject:"For the attention of Financial Manager",sender:"John",recipient:"Aman",status:"Signed",remarks:"Regarding the Financials" ,vendor:"Bharath Powers"      },
    {date:"18/10/2020 14:52:34",subject:"For the attention of Financial Manager",sender:"Vijay",recipient:"Aman",status:"Draft",remarks:"Regarding the Financials",vendor:"Tata Steels"      },
    {date:"26/11/2020 16:07:23",subject:"For the attention of Financial Manager",sender:"Parmeet",recipient:"Aman",status:"Signed",remarks:"Regarding the Financials" ,vendor:"First Choice Pvt Ltd"   },

  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }



  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddRfqComponent, {
      
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public opendocdialog() {
    let dialogRef = this.dialog.open(ShowDocsComponent, {
    
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  
  public openitemdialog() {
    let dialogRef = this.dialog.open(ShowDocsItemsComponent, {
    
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
