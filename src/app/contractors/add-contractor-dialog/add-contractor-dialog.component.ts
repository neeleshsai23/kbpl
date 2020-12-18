import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-contractor-dialog',
  templateUrl: './add-contractor-dialog.component.html',
  styleUrls: ['./add-contractor-dialog.component.scss']
})
export class AddContractorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddContractorDialogComponent>) { }

  ngOnInit() {
  }


  close(){
    this.dialogRef.close();
  }

}
