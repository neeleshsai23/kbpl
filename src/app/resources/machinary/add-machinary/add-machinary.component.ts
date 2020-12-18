import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-machinary',
  templateUrl: './add-machinary.component.html',
  styleUrls: ['./add-machinary.component.scss']
})
export class AddMachinaryComponent implements OnInit {

   
  constructor(public dialogRef: MatDialogRef<AddMachinaryComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}