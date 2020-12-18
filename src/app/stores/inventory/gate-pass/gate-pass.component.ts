import { AddGatepassComponent } from './add-gatepass/add-gatepass.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-gate-pass',
  templateUrl: './gate-pass.component.html',
  styleUrls: ['./gate-pass.component.scss']
})
export class GatePassComponent implements OnInit {


  
items=[
  {"gatepass":"OM/GP/APR-20/10009","type":"","purpose":"Service","items":"Machine","details":"To change the parts","issued":"12/11/2020","status":"Pending"},
  {"gatepass":"OM/GP/APR-21/10008","type":"","purpose":"Replacement","items":"Hard Disk","details":"To recover the data","issued":"13/11/2020","status":"Pending"},
  {"gatepass":"OM/GP/APR-23/10009","type":"","purpose":"Repair","items":"Table","details":"To change the legs","issued":"14/11/2020","status":"Pending"},
  {"gatepass":"OM/GP/APR-24/10019","type":"","purpose":"Service","items":"Vechile","details":"To service","issued":"15/11/2020","status":"Declined"},
  {"gatepass":"OM/GP/APR-25/10029","type":"","purpose":"Replacement","items":"Glass","details":"To get new glass","issued":"16/11/2020","status":"Pending"},
  ]
  
 
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddGatepassComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}
}

