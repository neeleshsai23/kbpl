
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { ShowdocsComponent } from './showdocs/showdocs.component';

@Component({
  selector: 'app-defect-liability',
  templateUrl: './defect-liability.component.html',
  styleUrls: ['./defect-liability.component.scss']
})
export class DefectLiabilityComponent implements OnInit {
  items=[
    { "Date" : "15-Nov-2020","Subject" : "Wires","Department" : "Electrical", "Sent_By" :"John","Received_By" :"Mark" , "Expected_Completion" : "20-Nov-2020","Completion_Percent"  :"50%","Total_Expenses" : "10000","Docs":"2"},
    { "Date" : "2-Sep-2019","Subject" : "Tables","Department" : "Furniture", "Sent_By" :"Mark","Received_By" :"Sam" , "Expected_Completion" : "22-Sep-2020","Completion_Percent"  :"75%","Total_Expenses" : "23000","Docs":"5"},
    { "Date" : "24-Jan-2016","Subject" : "Pipes","Department" : "Plumbing", "Sent_By" :"Jeswin","Received_By" :"Jenni" , "Expected_Completion" : "15-Jun-2018","Completion_Percent"  :"80%","Total_Expenses" : "50000","Docs":"6"},
    { "Date" : "1-Dec-2019","Subject" : "Cement","Department" : "Civil", "Sent_By" :"Lucy","Received_By" :"Mark" , "Expected_Completion" : "1-Jan-2020","Completion_Percent"  :"57%","Total_Expenses" : "45000","Docs":"4"},
    { "Date" : "9-Jun-2020","Subject" : "Switches","Department" : "Electrical", "Sent_By" :"Jenni","Received_By" :"Lucy" , "Expected_Completion" : "15-Nov-2020","Completion_Percent"  :"90%","Total_Expenses" : "60000","Docs":"3"},
    ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  
  public openAdd() {
    let dialogRef = this.dialog.open(AddDialogComponent, {
      
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  
  public opendocdialog() {
    let dialogRef = this.dialog.open(ShowdocsComponent, {
    
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
