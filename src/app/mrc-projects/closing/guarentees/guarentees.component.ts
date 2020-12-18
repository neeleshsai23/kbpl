import { AddGuarenteeComponent } from './add-guarentee/add-guarentee.component';
import { ShowIssueComponent } from './../../project-site/issues/show-issue/show-issue.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShowDocsComponent } from 'src/app/shared/show-docs/show-docs.component';
ShowIssueComponent
@Component({
  selector: 'app-guarentees',
  templateUrl: './guarentees.component.html',
  styleUrls: ['./guarentees.component.scss']
})
export class GuarenteesComponent implements OnInit {

  items=[
    {"security":"General Protection","returndate":"1 Nov 2020","amountdue":"0.5 Cr","amountreceived":"0.45 Cr","balance":"0.05 Cr","disbursal":"25 Nov 2020","delay":"25","payment":"15 Nov 2020","docs":"3"},
    {"security":"Insurance Protection","returndate":"2 Nov 2020","amountdue":"1.5 Cr","amountreceived":"1.45 Cr","balance":"0.06 Cr","disbursal":"26 Nov 2020","delay":"26","payment":"16 Nov 2020","docs":"1"},
    {"security":"Material Protection","returndate":"3 Nov 2020","amountdue":"0.7 Cr","amountreceived":"0.75 Cr","balance":"0.07 Cr","disbursal":"27 Nov 2020","delay":"27","payment":"17 Nov 2020","docs":"2"},
    {"security":"Quality Protection","returndate":"4 Nov 2020","amountdue":"0.9 Cr","amountreceived":"1.45 Cr","balance":"0.08 Cr","disbursal":"28 Nov 2020","delay":"28","payment":"18 Nov 2020","docs":"1"},
    {"security":"Billing Protection","returndate":"5 Nov 2020","amountdue":"2.5 Cr","amountreceived":"0.45 Cr","balance":"0.09 Cr","disbursal":"29 Nov 2020","delay":"29","payment":"19 Nov 2020","docs":"2"},
    ]
    
    
    constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  public opendocs() {
    let dialogRef = this.dialog.open(ShowDocsComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openAdd() {
    let dialogRef = this.dialog.open(AddGuarenteeComponent, {
      
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
