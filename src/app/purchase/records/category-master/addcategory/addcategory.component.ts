
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddcategoryComponent>) { }

  ngOnInit() {
  }
  close(): void { 
    this.dialogRef.close();
  }
}
