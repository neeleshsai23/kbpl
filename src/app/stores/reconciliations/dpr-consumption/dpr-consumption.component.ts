import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {AddItemDialogComponent} from '../add-item-dialog/add-item-dialog.component';

@Component({
  selector: 'app-dpr-consumption',
  templateUrl: './dpr-consumption.component.html',
  styleUrls: ['./dpr-consumption.component.scss']
})
export class DprConsumptionComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

  values = [
    {sno:"1",project:"ABC Ltd",category:"Earth Work",boq:"Cement",expected:"20",actual:"25",date:"25-Nov-2019",items:"660",variance:"5"},
    {sno:"2",project:"EAI Ltd",category:"Foundation",boq:"Concrete",expected:"20",actual:"25",date:"25-Nov-2019",items:"660",variance:"5"},
    {sno:"3",project:"ABC Ltd",category:"Earth Work",boq:"Cement",expected:"20",actual:"25",date:"25-Nov-2019",items:"660",variance:"5"},
    {sno:"4",project:"EAI Ltd",category:"Foundation",boq:"Concrete",expected:"20",actual:"25",date:"25-Nov-2019",items:"660",variance:"5"},
    {sno:"5",project:"ABC Ltd",category:"Earth Work",boq:"Cement",expected:"20",actual:"25",date:"25-Nov-2019",items:"660",variance:"5"}



  ]

  openAddItemDialog(){
    this.dialog.open(AddItemDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }



}
