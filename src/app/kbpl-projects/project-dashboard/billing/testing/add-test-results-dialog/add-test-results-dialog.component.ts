import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-test-results-dialog',
  templateUrl: './add-test-results-dialog.component.html',
  styleUrls: ['./add-test-results-dialog.component.scss']
})
export class AddTestResultsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddTestResultsDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
