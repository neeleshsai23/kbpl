import { AddToolComponent } from './add-tool/add-tool.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  filterToggle:boolean;
  
items=[
  {"name":"Hammers ","description":" Used in construction","unit":"Pcs ","capacity":"5000 ","utilization":"3500 ","availability":"1500 ","lastissued":"23/8/2020 ","status":"Active ","make":"Rajuri Steel","model":"W154"},
  {"name":"Screw Drivers","description":"Used in construction ","unit":"Qntls ","capacity":"40","utilization":" 30","availability":"20 ","lastissued":" 24/8/2020","status":"Active ","make":"Rajuri Steel","model":"A4T2"},
  {"name":"Saws","description":"Used in construction ","unit":"Qntls ","capacity":"40 ","utilization":"30 ","availability":" 20","lastissued":"25/8/2020 ","status":"Inactive ","make":"Relience Steel","model":"K2G6"},
  {"name":"wrenches","description":"Used in construction ","unit":"Pcs ","capacity":" 5000","utilization":"3500 ","availability":"1500 ","lastissued":"26/8/2020 ","status":"Active ","make":"First choice","model":"K8U7"},
  {"name":"Axe ","description":" Used in construction","unit":"Qntls","capacity":"50 ","utilization":"25 ","availability":"25 ","lastissued":"28/8/2020 ","status":"Inactive ","make":"First Choice","model":"W6R4"},
]

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddToolComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}

}
