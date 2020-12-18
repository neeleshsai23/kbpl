import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-advance',
  templateUrl: './add-advance.component.html',
  styleUrls: ['./add-advance.component.scss']
})
export class AddAdvanceComponent implements OnInit {

   
  constructor(public dialogRef: MatDialogRef<AddAdvanceComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}