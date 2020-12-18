import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-add-stocktrans',
  templateUrl: './add-stocktrans.component.html',
  styleUrls: ['./add-stocktrans.component.scss']
})
export class AddStocktransComponent implements OnInit {

 
   
  constructor(public dialogRef: MatDialogRef<AddStocktransComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}