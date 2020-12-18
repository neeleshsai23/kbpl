import { ItemsComponent } from './items/items.component';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddcategoryComponent } from './addcategory/addcategory.component';

@Component({
  selector: 'app-category-master',
  templateUrl: './category-master.component.html',
  styleUrls: ['./category-master.component.scss']
})
export class CategoryMasterComponent implements OnInit {
  items=[
    { "Category_Name" : "Electrical","Category_Item" : "EL/MRC/25","Items" :"3",},
    { "Category_Name" : "Plumbing","Category_Item" : "PL/MRC/17","Items" :"2",},
    { "Category_Name" : "Civil","Category_Item" : "C/MRC/10","Items" :"3",},
    { "Category_Name" : "Furniture","Category_Item" : "F/MRC/34","Items" :"1",},
    { "Category_Name" : "Electrical","Category_Item" : "EL/MRC/12","Items" :"5",},
    ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  
  public openAdd() {
    let dialogRef = this.dialog.open(AddcategoryComponent, {

      height: 'auto',
      width: '700px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }

  public openitem() {
    let dialogRef = this.dialog.open(ItemsComponent, {

      height: 'auto',
      width: '700px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }
}
