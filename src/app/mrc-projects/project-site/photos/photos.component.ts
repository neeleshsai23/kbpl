import { ShowPhotosComponent } from './show-photos/show-photos.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  filterToggle:boolean;

  items=[
    {"serial":"5.2.1","category":"Furniture","item":"Work Tables","unit":"No's","planqty":"3000","actualqty":"2900","photos":"7","lastupdated":"12 Nov 2020","updatedby":"Sachin Patel"},
    {"serial":"5.2.2","category":"Furniture","item":"Doors","unit":"No's","planqty":"2500","actualqty":"2400","photos":"5","lastupdated":"11 Oct 2020","updatedby":"Raj"},
    {"serial":"6.2.1","category":"Plumbing","item":"Flush Pipes","unit":"No's","planqty":"2300","actualqty":"2100","photos":"7","lastupdated":"21 Nov 2020","updatedby":"Parmeet"},
    {"serial":"6.2.2","category":"Plumbing","item":"Water Taps","unit":"No's","planqty":"2100","actualqty":"2000","photos":"5","lastupdated":"12 Oct 2020","updatedby":"Gowda"},
    {"serial":"7.2.1","category":"Flooring","item":"Tiles","unit":"No's","planqty":"2600","actualqty":"2500","photos":"7","lastupdated":"16 Nov 2020","updatedby":"Singh"},
    ]
  

    
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddPhotoComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}


public showphoto() {
  let dialogRef = this.dialog.open(ShowPhotosComponent, {
   
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}




}

