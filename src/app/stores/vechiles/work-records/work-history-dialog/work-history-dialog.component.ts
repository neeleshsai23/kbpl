import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-work-history-dialog',
  templateUrl: './work-history-dialog.component.html',
  styleUrls: ['./work-history-dialog.component.scss']
})
export class WorkHistoryDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<WorkHistoryDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
