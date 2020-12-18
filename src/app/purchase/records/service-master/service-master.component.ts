import { ServiceDialogComponent } from './service-dialog/service-dialog.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-service-master',
  templateUrl: './service-master.component.html',
  styleUrls: ['./service-master.component.scss']
})
export class ServiceMasterComponent implements OnInit {

  
  items=[
    { "Service_Code" : "SW/EL/120","Service_Name" : "Housekeeping ","Category" : "General","Unit" : "Days","Rates" :"7"},
    { "Service_Code" : "Tb/F/100","Service_Name" : "Generator Servicing ","Category" : "Equipment","Unit" : "Nos","Rates" :"2"},
    { "Service_Code" : "C/Civ/25","Service_Name" : "Excavator General Service ","Category" : "Equipment","Unit" : "Nos","Rates" :"5"},
    { "Service_Code" : "Pi/P/12","Service_Name" : "Canteen Services","Category" : "General","Unit" : "Days","Rates" :"6"},
    { "Service_Code" : "F/EL/15","Service_Name" : "Tyre Retreading ","Category" : "Consumables","Unit" : "Days","Rates" :"4"},
    ]
    
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  public openAdd() {
    let dialogRef = this.dialog.open(AddserviceComponent, {

      height: 'auto',
      width: '700px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }
  public openRates() {
    let dialogRef = this.dialog.open(ServiceDialogComponent, {

      height: 'auto',
      width: '700px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }
}
