import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-grid-columns-order-requests',
  templateUrl: './grid-columns-order-requests.component.html',
  styleUrls: ['./grid-columns-order-requests.component.scss']
})
export class GridColumnsOrderRequestsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GridColumnsOrderRequestsComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close()
  }

}
