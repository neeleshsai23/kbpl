import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-work-record-dialog',
  templateUrl: './add-work-record-dialog.component.html',
  styleUrls: ['./add-work-record-dialog.component.scss']
})
export class AddWorkRecordDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddWorkRecordDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
