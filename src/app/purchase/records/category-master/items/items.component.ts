import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
items=[
  { "SNo" : "1","Item_Name": "Wires"},
  { "SNo" : "2","Item_Name": "Pipes"},
  { "SNo" : "3","Item_Name": "Cement"},
  { "SNo" : "4","Item_Name": "Tables"},
  { "SNo" : "5","Item_Name": "Wires"},
]
constructor(public dialogRef: MatDialogRef<ItemsComponent>) { }

ngOnInit() {
}

close(): void {
  this.dialogRef.close();
}
}
