import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.scss']
})
export class AddserviceComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddserviceComponent>) { }

  ngOnInit() {
  }
  close(): void { 
    this.dialogRef.close();
  }
}
