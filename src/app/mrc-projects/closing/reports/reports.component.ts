import { AddreportComponent } from './addreport/addreport.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  items=[
    { "Date" : "9-Jun-2020", "Department" : "Electrical","Prepared_By" : "John","Logged_By" : "Jenni","Subject" : "First phase completed","Exceptions" : "Some items where missing in the report"},
    { "Date" : "1-Dec-2019", "Department" : "Furniture","Prepared_By" : "Mark","Logged_By" : "Sam","Subject" : "Third phase is in hold","Exceptions" : "Some items where missing in the report"},
    { "Date" : "24-Jan-2016", "Department" : "Plumbing","Prepared_By" : "Jeswin","Logged_By" : "Mark","Subject" : "Final phase Delayed","Exceptions" : "Some items where missing in the report"},
    { "Date" : "2-Sep-2019", "Department" : "Civil","Prepared_By" : "Lucy","Logged_By" : "Mark","Subject" : "Second phase completed","Exceptions" : "Some items where missing in the report"},
    { "Date" : "15-Nov-2020", "Department" : "Electrical","Prepared_By" : "Jenni","Logged_By" : "Lucy","Subject" : "Sixth phase completed","Exceptions" : "Some items where missing in the report"},
    ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openAdd() {
    let dialogRef = this.dialog.open(AddreportComponent, {
      
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
