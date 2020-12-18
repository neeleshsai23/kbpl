import { AddPlantComponent } from './add-plant/add-plant.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {

  filterToggle:boolean;
  
items=[
  {"name":"Breakers","description":" Used in construction","unit":"Pcs ","capacity":"2","utilization":"1","availability":"1","lastissued":"23/8/2020 ","status":"Active ","make":"Bharat Brick Makers","model":""},
  {"name":"Bulldozers","description":"Used in construction ","unit":"Qntls ","capacity":"10","utilization":"8","availability":"2 ","lastissued":" 24/8/2020","status":"Active ","make":"ACC cement","model":""},
  {"name":"Cherry Pickers ","description":"Used in construction ","unit":"Qntls ","capacity":"3","utilization":"2 ","availability":" 1","lastissued":"25/8/2020 ","status":"Inactive ","make":"Relience Steel","model":""},
  {"name":"Earth Movers ","description":"Used in construction ","unit":"Pcs ","capacity":"3","utilization":"1","availability":"2","lastissued":"26/8/2020 ","status":"Active ","make":"First choice","model":""},
  {"name":"Concrete Crusher","description":" Used in construction","unit":"Qntls","capacity":"5 ","utilization":"3 ","availability":"2 ","lastissued":"28/8/2020 ","status":"Inactive ","make":"First Choice","model":""},
]

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddPlantComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}

}
