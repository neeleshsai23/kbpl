import { RatesDialogComponent } from './rates-dialog/rates-dialog.component';
import { AddComponent } from './add/add.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-itemrates-master',
  templateUrl: './itemrates-master.component.html',
  styleUrls: ['./itemrates-master.component.scss']
})
export class ItemratesMasterComponent implements OnInit {

  items=[
    { "Item_Code" : "SW/EL/120","Item_Name" : "Switches","Category" : "Electrical","Unit" : "Pcs","Make" : "Orient","Model" : "AF/2020","Rates" :"7"},
    { "Item_Code" : "Tb/F/100","Item_Name" : "Tables","Category" : "Furniture","Unit" : "Pcs","Make" : "Damro","Model" : "F/2019","Rates" :"2"},
    { "Item_Code" : "C/Civ/25","Item_Name" : "Cement","Category" : "Civil","Unit" : "Nos","Make" : "Kesoram","Model" : "C/2020","Rates" :"5"},
    { "Item_Code" : "Pi/P/12","Item_Name" : "Pipes","Category" : "Plumbing","Unit" : "Nos","Make" : "Birla","Model" : "P/2017","Rates" :"6"},
    { "Item_Code" : "F/EL/15","Item_Name" : "Fans","Category" : "Electrical","Unit" : "Nos","Make" : "Orient","Model" : "F/2020","Rates" :"4"},
    ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  public openAdd() {
    let dialogRef = this.dialog.open(AddComponent, {

      height: 'auto',
      width: '700px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }
  public openRates() {
    let dialogRef = this.dialog.open(RatesDialogComponent, {

      height: 'auto',
      width: '700px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }
}
