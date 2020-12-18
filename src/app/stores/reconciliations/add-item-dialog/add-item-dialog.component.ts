import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.scss']
})
export class AddItemDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddItemDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close()
  }

}
