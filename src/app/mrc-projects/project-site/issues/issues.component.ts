import { ShowIssueComponent } from './show-issue/show-issue.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  items=[
    {"reference":"125/54","subject":"Concrete mixer","description":"The Concrete mixer machine is not working","department":"Earth work","date":"15/03/2020","incharge":"Parmeet","resolvedate":"20/03/2020","docs":"3","priority":"High","status":"In process"},
    {"reference":"126/53","subject":"Steel Cutter","description":"The Steel cutter is not working","department":"Earth work","date":"16/03/2020","incharge":"Gurmeet","resolvedate":"21/03/2020","docs":"4","priority":"Medium","status":"Pending"},
    {"reference":"127/55","subject":"Cement Mixer","description":"The Cement mixer machine is not working","department":"Earth work","date":"17/03/2020","incharge":"Parmeet","resolvedate":"22/03/2020","docs":"2","priority":"Hign","status":"In process"},
    {"reference":"128/56","subject":"Pipe Cutter","description":"The Pipe cutter machine is not working","department":"Earth work","date":"18/03/2020","incharge":"Robert","resolvedate":"23/03/2020","docs":"3","priority":"Low","status":"Done"},
    {"reference":"129/57","subject":"Tile Cutter","description":"The Concrete mixer machine is not working","department":"Earth work","date":"19/03/2020","incharge":"Parmeet","resolvedate":"24/03/2020","docs":"2","priority":"Medium","status":"Pending"},
    ]
    
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  public addlabour() {
    let dialogRef = this.dialog.open(AddIssueComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}

public opendocs() {
  let dialogRef = this.dialog.open(ShowIssueComponent, {
   
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}
}
