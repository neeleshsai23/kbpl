import { ShowReqitemComponent } from './show-reqitem/show-reqitem.component';
import { AddRequisitionComponent } from './add-requisition/add-requisition.component';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['./requisition.component.scss']
})
export class RequisitionComponent implements OnInit {


  items=[
    {"ref":"MRC/123/12","req":"18-Nov-2020","due":"5-Dec-2020","boq":"Electrical, Mechanical","itemcat":"Electrical, Plumbing","item":"10","approval":"Approved","delivery":"Transit"},
    {"ref":"MRC/123/13","req":"19-Nov-2020","due":"6-Dec-2020","boq":"Electrical, Plumbing","itemcat":"Mechanical, Earth Work","item":"16","approval":"Approved","delivery":"Transit"},
    {"ref":"MRC/123/14","req":"20-Nov-2020","due":"7-Dec-2020","boq":"Mechanical, Electrical","itemcat":"Electrical, Plumbing","item":"17","approval":"Approved","delivery":"Transit"},
    {"ref":"MRC/123/15","req":"15-Nov-2020","due":"8-Dec-2020","boq":"Machanical, Plumbing","itemcat":"MEchanical, Electrical","item":"18","approval":"Approved","delivery":"Transit"},
    {"ref":"MRC/123/16","req":"11-Nov-2020","due":"9-Dec-2020","boq":"Electrical, Earth Work","itemcat":"Electrical, Plumbing","item":"19","approval":"Approved","delivery":"Transit"},
    ]
    
    
     
    constructor(public dialog: MatDialog) { }

    ngOnInit() {
    }
  
    public openUserDialog(id) {
      let dialogRef = this.dialog.open(AddRequisitionComponent, {
        data: id,
        height: 'auto',
        width: '600px'
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }
    public openitem() {
      let dialogRef = this.dialog.open(ShowReqitemComponent, {
     
        height: '600px',
        width: '600px'
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }

}
