import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-rawmaterial',
  templateUrl: './add-rawmaterial.component.html',
  styleUrls: ['./add-rawmaterial.component.scss']
})
export class AddRawmaterialComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<AddRawmaterialComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}