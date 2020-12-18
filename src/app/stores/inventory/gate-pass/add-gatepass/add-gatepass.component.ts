import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-gatepass',
  templateUrl: './add-gatepass.component.html',
  styleUrls: ['./add-gatepass.component.scss']
})
export class AddGatepassComponent implements OnInit {

 
   
  constructor(public dialogRef: MatDialogRef<AddGatepassComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}