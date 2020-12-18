import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.scss']
})
export class AddCategoryDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddCategoryDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close()
  }

}
