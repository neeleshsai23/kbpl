import { AddReqitemComponent } from './../add-reqitem/add-reqitem.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-add-requisition',
  templateUrl: './add-requisition.component.html',
  styleUrls: ['./add-requisition.component.scss']
})
export class AddRequisitionComponent implements OnInit {

  
items=[
  {"selectitemcat":"Electrical","selectitem":"Socket","due":"11/10/2020","qtyavailable":"45","requiredqty":"55"},
  {"selectitemcat":"Electrical","selectitem":"wire","due":"12/10/2020","qtyavailable":"44","requiredqty":"56"},
  {"selectitemcat":"Mechanical","selectitem":"Screw","due":"13/10/2020","qtyavailable":"43","requiredqty":"57"},
  {"selectitemcat":"Mechanical","selectitem":"Axe","due":"14/10/2020","qtyavailable":"42","requiredqty":"58"},
  {"selectitemcat":"Electrical","selectitem":"Lights","due":"15/10/2020","qtyavailable":"41","requiredqty":"59"},
  
  ]
  
     
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public additem() {
    let dialogRef = this.dialog.open(AddReqitemComponent, {

      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }


}
