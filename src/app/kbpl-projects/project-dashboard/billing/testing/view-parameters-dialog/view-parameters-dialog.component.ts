import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-view-parameters-dialog',
  templateUrl: './view-parameters-dialog.component.html',
  styleUrls: ['./view-parameters-dialog.component.scss']
})
export class ViewParametersDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewParametersDialogComponent>) { }

  ngOnInit() {
  }

  values:any = [
    {parameter:"Concrete Mix",range:"1:2:4 > 1:8:16",unit:"Cum",actual_value:"1:6:12",remarks:"Positive"},
    {parameter:"Concrete Mix",range:"1:2:4 > 1:8:16",unit:"Cum",actual_value:"1:6:12",remarks:"Positive"},
    {parameter:"Concrete Mix",range:"1:2:4 > 1:8:16",unit:"Cum",actual_value:"1:6:12",remarks:"Positive"},
  ]

  close(){
    this.dialogRef.close();
  }



}
