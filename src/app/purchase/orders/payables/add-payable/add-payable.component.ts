import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-add-payable',
  templateUrl: './add-payable.component.html',
  styleUrls: ['./add-payable.component.scss']
})
export class AddPayableComponent implements OnInit {

 
  constructor(public dialogRef: MatDialogRef<AddPayableComponent>,@Inject(MAT_DIALOG_DATA) public user: number) { 
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

