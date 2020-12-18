import { AddrfbComponent } from './addrfb/addrfb.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-rfb',
  templateUrl: './rfb.component.html',
  styleUrls: ['./rfb.component.scss']
})
export class RFBComponent implements OnInit {
  items=[
    { "Select_Category" : "Electrical","Select_Item" : "Switches","Unit" : "Pcs","Quantity" : "4","Remarks" : "Alright"},
    { "Select_Category" : "Plumbing","Select_Item" : "Pipes","Unit" : "Pcs","Quantity" : "12","Remarks" : "Alright"},
    { "Select_Category" : "Civil","Select_Item" : "Cement","Unit" : "Qtls","Quantity" : "7","Remarks" : "Alright"},
    { "Select_Category" : "Furniture","Select_Item" : "Tables","Unit" : "Pcs","Quantity" : "5","Remarks" : "Alright"},
    { "Select_Category" : "Electrical","Select_Item" : "Fans","Unit" : "Pcs","Quantity" : "3","Remarks" : "Alright"},
    ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  public openAdd() {
    let dialogRef = this.dialog.open(AddrfbComponent, {

      height: 'auto',
      width: '700px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }
}
