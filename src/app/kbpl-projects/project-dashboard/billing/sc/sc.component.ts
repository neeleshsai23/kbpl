import { AddDebitNoteComponent } from './add-debit-note/add-debit-note.component';
import { AddAdvanceComponent } from './add-advance/add-advance.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShowDocsComponent } from '../../../../shared/show-docs/show-docs.component';
@Component({
  selector: 'app-sc',
  templateUrl: './sc.component.html',
  styleUrls: ['./sc.component.scss']
})
export class SCComponent implements OnInit {
  items=[
    {"subcontractor":"M/s Power Solutions","date":"13/09/2020 21:54:02","subject":"Short Supply","amount":"15","description":"Shortage in shipment","type":"Debit Note","docs":"3"},
    {"subcontractor":"Bharath Powers","date":"11/09/2020 11:34:12","subject":"Sufficient Supply","amount":"17","description":"Enough shipment","type":"Advance","docs":"3"},
    {"subcontractor":"Tata Steels","date":"3/09/2020 21:53:22","subject":"Short Supply","amount":"14","description":"Shortage in shipment","type":"Advance","docs":"3"},
    {"subcontractor":"First Choice Pvt Ltd","date":"18/07/2020 21:54:32","subject":"Sufficient Supply","amount":"12","description":"Enough Shipment","type":"Debit Note","docs":"3"},
    {"subcontractor":"Relience Steel","date":"23/09/2020 51:44:42","subject":"Short Supply","amount":"10","description":"Shortage in shipment","type":"Debit Note","docs":"3"}
    
    ]
    
  
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddAdvanceComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}
public opendebitDialog() {
  let dialogRef = this.dialog.open(AddDebitNoteComponent, {
   
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}
public showdocs() {
  let dialogRef = this.dialog.open(ShowDocsComponent, {
  
    height: 'auto',
    width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

}
