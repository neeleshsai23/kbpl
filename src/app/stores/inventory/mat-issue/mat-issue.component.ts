import { AddMatissueComponent } from './add-matissue/add-matissue.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-mat-issue',
  templateUrl: './mat-issue.component.html',
  styleUrls: ['./mat-issue.component.scss']
})
export class MatIssueComponent implements OnInit {

  


  items=[
    {"jobcard":"MRC/1508","carddate":"20/12/2020","maintype":"Accident","matcat":"Mechanical","matmake":"Tata","matmodel":"TH087","status":"Pending"},
    {"jobcard":"MRC/1608","carddate":"21/12/2020","maintype":"Running","matcat":"Earth Work","matmake":"Relience","matmodel":"TH088","status":"Pending"},
    {"jobcard":"MRC/1708","carddate":"22/12/2020","maintype":"Schedule","matcat":"Electrical","matmake":"Tata","matmodel":"TH089","status":"Delay"},
    {"jobcard":"MRC/1808","carddate":"23/12/2020","maintype":"Accident","matcat":"Mechanical","matmake":"MS Powers","matmodel":"TH077","status":"Pending"},
    {"jobcard":"MRC/9508","carddate":"24/12/2020","maintype":"Running","matcat":"Earth Work","matmake":"Tata","matmodel":"TH089","status":"Pending"},
    ]
    
    
  
 
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddMatissueComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}
}