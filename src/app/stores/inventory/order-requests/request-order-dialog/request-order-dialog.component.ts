import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-request-order-dialog',
  templateUrl: './request-order-dialog.component.html',
  styleUrls: ['./request-order-dialog.component.scss']
})
export class RequestOrderDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RequestOrderDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
