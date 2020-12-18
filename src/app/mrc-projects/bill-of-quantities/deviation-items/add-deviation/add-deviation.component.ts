import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-deviation',
  templateUrl: './add-deviation.component.html',
  styleUrls: ['./add-deviation.component.scss']
})
export class AddDeviationComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<AddDeviationComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}
