import { Component, OnInit, Inject } from '@angular/core';
import { LocationAPIService } from '../../../shared/services/locationapi.service';
import { AlertService } from '../../../shared/services/alert.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-location-dialog',
  templateUrl: './add-location-dialog.component.html',
  styleUrls: ['./add-location-dialog.component.scss'],
  providers:[AlertService,LocationAPIService]
})
export class AddLocationDialogComponent implements OnInit {
  countryList : any;
  stateList : any;
  cityList : any;
  value:any;
  lateralValue:any;

  constructor(public dialogRef: MatDialogRef<AddLocationDialogComponent>,@Inject(MAT_DIALOG_DATA) public user: any,
  private alertService: AlertService, private locationService: LocationAPIService) { 
    console.log(this.user);
  }

  ngOnInit() {
    this.value = this.user.split(' ')[1];
    this.lateralValue = this.user.split(' ')[0];
    // this.locationService.getCountryList().subscribe(
    //   data => {
    //       this.countryList = data;
    //   });
  }
  
  close(): void {
    this.dialogRef.close();
  }

  // onCountrySelect(country) {
  //   this.locationService.getStatesList(country).subscribe(
  //   data => {
  //       this.stateList = data;
  //   });
  // }

  // onStateSelect(country,state) {
  //   this.locationService.getCitysList(country,state).subscribe(
  //   data => {
  //       console.log(data);
  //       this.cityList = data;
  //   });
  // }
  addCountry() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
