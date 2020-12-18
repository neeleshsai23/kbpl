import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AlertService } from '../../../shared/services/alert.service';
import { Alert } from 'selenium-webdriver';
import { MatDialog } from '@angular/material';
import { AddLocationDialogComponent } from '../add-location-dialog/add-location-dialog.component';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
  providers: [AlertService]
})
export class StateComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  
  states = [
    {state:"Telangana",number:"10",status:true},
    {state:"Andhra Pradesh",number:"8",status:true},
    {state:"Maharashtra",number:"5",status:true},
    {state:"Kerala",number:"3",status:true},
    {state:"Tamil Nadu",number:"5",status:true},
  ]
  
  constructor(private location: Location, public alertService : AlertService,public dialog: MatDialog) { }
  
  ngOnInit() {
  }
  
  openStateDialog(value) {
    let dialogRef = this.dialog.open(AddLocationDialogComponent, {
      data: value,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  
  
  goBack() {
    this.location.back();
  }
  
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
  }
  
  deleteState(){
    this.alertService.createAlert('Successfully deleted.', 1);
  }
  
}
