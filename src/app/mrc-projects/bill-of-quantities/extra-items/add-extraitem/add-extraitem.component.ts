import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-extraitem',
  templateUrl: './add-extraitem.component.html',
  styleUrls: ['./add-extraitem.component.scss']
})
export class AddExtraitemComponent implements OnInit {

   
  constructor(public dialogRef: MatDialogRef<AddExtraitemComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}