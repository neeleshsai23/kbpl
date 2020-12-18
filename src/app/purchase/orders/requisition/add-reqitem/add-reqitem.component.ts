import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-reqitem',
  templateUrl: './add-reqitem.component.html',
  styleUrls: ['./add-reqitem.component.scss']
})
export class AddReqitemComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<AddReqitemComponent>,@Inject(MAT_DIALOG_DATA) public user: number) { 
    console.log(this.user);
   }

  
  ngOnInit() {
    
  }

  close(): void {
    this.dialogRef.close();
  }

  saveStep() {
    this.dialogRef.close();
  }

}

