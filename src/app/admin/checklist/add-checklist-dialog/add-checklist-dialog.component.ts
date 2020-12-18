import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { LocationAPIService } from '../../../shared/services/locationapi.service';

@Component({
  selector: 'app-add-checklist-dialog',
  templateUrl: './add-checklist-dialog.component.html',
  styleUrls: ['./add-checklist-dialog.component.scss'],
  providers: [AlertService,LocationAPIService]
})
export class AddCheckListDialogComponent implements OnInit {

  countryList : any;
  stateList : any;
  cityList : any;
  constructor(public dialogRef: MatDialogRef<AddCheckListDialogComponent>,@Inject(MAT_DIALOG_DATA) public user: number,
   private alertService: AlertService, private locationService: LocationAPIService) { 
    console.log(this.user);
   }

  
  ngOnInit() {
    
  }

  close(): void {
    this.dialogRef.close();
  }

  itemstr: HTMLElement[] = [];
  str: HTMLElement = <HTMLElement>document.getElementById("new_text");
  copy() {
    this.itemstr.push(this.str)
  }

  remove(e) {
    document.getElementById("repeat-" + e).remove();
  }

  saveLookup() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

  onCodeMasterSelect(code_master) {
    if(code_master == 'location') {
      this.locationService.getCountryList().subscribe(
      data => {
          this.countryList = data;
      });
    }
  }

  onCountrySelect(country) {
    this.locationService.getStatesList(country).subscribe(
    data => {
        this.stateList = data;
    });
  }

  onStateSelect(country,state) {
    this.locationService.getCitysList(country,state).subscribe(
    data => {
        console.log(data);
        this.cityList = data;
    });
  }

}
