import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-add-matissue',
  templateUrl: './add-matissue.component.html',
  styleUrls: ['./add-matissue.component.scss']
})
export class AddMatissueComponent implements OnInit {

   
  constructor(public dialogRef: MatDialogRef<AddMatissueComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}