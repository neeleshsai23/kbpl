import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addwo',
  templateUrl: './addwo.component.html',
  styleUrls: ['./addwo.component.scss']
})
export class AddwoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddwoComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveStep() {
    this.dialogRef.close();
  }
}
