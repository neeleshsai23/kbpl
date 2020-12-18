import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { AddLocationDialogComponent } from '../add-location-dialog/add-location-dialog.component';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  providers: [AlertService]
})
export class CountryComponent implements OnInit {
  
  // countries = ["India","Australia","Canada","Denmark","Singapore"];
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  
  countries = [
    {country:"India",number:"10",status:true},
    {country:"Australia",number:"8",status:true},
    {country:"Canada",number:"5",status:true},
    {country:"Denmark",number:"3",status:true},
    {country:"Singapore",number:"5",status:true},
  ]
  
  constructor(public alertService : AlertService,public dialog: MatDialog) { }
  
  ngOnInit() {
  }
  
  updateCountry() {
    this.alertService.createAlert("Successfully saved",1)
  }
  
  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
  }
  
  deleteCountry(){
    this.alertService.createAlert('Successfully deleted.', 1);
  }

  openCountryDialog(value) {
    let dialogRef = this.dialog.open(AddLocationDialogComponent, {
      data: value,
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
  }
  
}
