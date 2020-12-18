import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AlertService } from '../../../shared/services/alert.service';
import { AddLocationDialogComponent } from '../add-location-dialog/add-location-dialog.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  providers: [AlertService]
})
export class CityComponent implements OnInit {
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  
  cities = [
    {city:"Hyderabad",number:"10",status:true},
    {city:"Mumbai",number:"8",status:true},
    {city:"Chennai",number:"5",status:true},
    {city:"Kolkatta",number:"3",status:true},
    {city:"Banglore",number:"5",status:true},
  ]

  constructor(private location: Location, private alertService : AlertService,public dialog: MatDialog) { }

  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }

  updateCity() {
    this.alertService.createAlert('Successfully saved',1);
  }

  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
  }
  
  deleteCity(){
    this.alertService.createAlert('Successfully deleted.', 1);
  }

  openCityDialog(value) {
    let dialogRef = this.dialog.open(AddLocationDialogComponent, {
      data: value,
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
  }

}
