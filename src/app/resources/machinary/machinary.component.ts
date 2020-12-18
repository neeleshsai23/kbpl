import { AddMachinaryComponent } from './add-machinary/add-machinary.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-machinary',
  templateUrl: './machinary.component.html',
  styleUrls: ['./machinary.component.scss']
})
export class MachinaryComponent implements OnInit {

filterToggle:boolean;
  items=[
    {"name":"Earth Movers","description":" Used in construction","unit":"Pcs ","capacity":"5000 ","utilization":"3500 ","availability":"1500 ","lastissued":"23/8/2020 ","status":"Active ","make":"Rajuri Earth Movers","model":"W154"},
    {"name":"Cranes","description":"Used in construction ","unit":"Qntls ","capacity":"40","utilization":" 30","availability":"20 ","lastissued":" 24/8/2020","status":"Active ","make":"Krishna Cranes","model":"A4T2"},
    {"name":"Concrete Mixers","description":"Used in construction ","unit":"Qntls ","capacity":"40 ","utilization":"30 ","availability":" 20","lastissued":"25/8/2020 ","status":"Inactive ","make":"Hitachi","model":"K2G6"},
    {"name":"JCB","description":"Used in construction ","unit":"Pcs ","capacity":" 5000","utilization":"3500 ","availability":"1500 ","lastissued":"26/8/2020 ","status":"Active ","make":"First choice","model":"K8U7"},
    {"name":"Big Cranes","description":" Used in construction","unit":"Qntls","capacity":"50 ","utilization":"25 ","availability":"25 ","lastissued":"28/8/2020 ","status":"Inactive ","make":"Hitachi Cranes","model":"W6R4"},
  ]
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddMachinaryComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}
}
