import { AddRawmaterialComponent } from './add-rawmaterial/add-rawmaterial.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-raw-materials',
  templateUrl: './raw-materials.component.html',
  styleUrls: ['./raw-materials.component.scss']
})
export class RawMaterialsComponent implements OnInit {

  filterToggle:boolean;

items=[
  {"name":"Brick ","description":" Used in construction","unit":"Pcs ","capacity":"5000 ","utilization":"3500 ","availability":"1500 ","lastissued":"23/8/2020 ","status":"Active ","make":"Bharat Brick Makers","model":""},
  {"name":"Cement","description":"Used in construction ","unit":"Qntls ","capacity":"40","utilization":" 30","availability":"20 ","lastissued":" 24/8/2020","status":"Active ","make":"ACC cement","model":""},
  {"name":"Steel ","description":"Used in construction ","unit":"Qntls ","capacity":"40 ","utilization":"30 ","availability":" 20","lastissued":"25/8/2020 ","status":"Inactive ","make":"Relience Steel","model":""},
  {"name":"Stone ","description":"Used in construction ","unit":"Pcs ","capacity":" 5000","utilization":"3500 ","availability":"1500 ","lastissued":"26/8/2020 ","status":"Active ","make":"First choice","model":""},
  {"name":"Concrete ","description":" Used in construction","unit":"Qntls","capacity":"50 ","utilization":"25 ","availability":"25 ","lastissued":"28/8/2020 ","status":"Inactive ","make":"First Choice","model":""},
]

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddRawmaterialComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}

}
