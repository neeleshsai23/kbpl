import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddTestResultsDialogComponent} from './add-test-results-dialog/add-test-results-dialog.component';
import {ViewParametersDialogComponent} from './view-parameters-dialog/view-parameters-dialog.component';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  values: any = [
    {test_name:"Structural",date:"25-09-2020",lab_name:"Guwahati",parameters:"3",status:"Pending"},
    {test_name:"Flexibility",date:"18-09-2020",lab_name:"Kanpur",parameters:"2",status:"Done"}
  ]

  openTestResults(){
    let dialogRef = this.dialog.open(AddTestResultsDialogComponent, {
      
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  

  openParameters(){
    let dialogRef = this.dialog.open(ViewParametersDialogComponent, {
      
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
