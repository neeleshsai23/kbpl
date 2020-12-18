import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-generate-request-dialog',
  templateUrl: './generate-request-dialog.component.html',
  styleUrls: ['./generate-request-dialog.component.scss']
})
export class GenerateRequestDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<GenerateRequestDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close()
  }

}
