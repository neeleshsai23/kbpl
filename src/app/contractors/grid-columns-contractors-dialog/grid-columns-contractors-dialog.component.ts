import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-grid-columns-contractors-dialog',
  templateUrl: './grid-columns-contractors-dialog.component.html',
  styleUrls: ['./grid-columns-contractors-dialog.component.scss']
})
export class GridColumnsContractorsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GridColumnsContractorsDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
