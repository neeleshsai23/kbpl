import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {AddItemDialogComponent} from '../add-item-dialog/add-item-dialog.component';

@Component({
  selector: 'app-site-balances',
  templateUrl: './site-balances.component.html',
  styleUrls: ['./site-balances.component.scss']
})
export class SiteBalancesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

  values = [
    {sno:"1",project:"ABC Ltd",category:"Earth Work",boq:"Cement",balance:"20",date:"25-Nov-2019",variance:"83"},
    {sno:"2",project:"EAI Ltd",category:"Foundation",boq:"Concrete",balance:"20",date:"25-Nov-2019",variance:"83"},
    {sno:"3",project:"ABC Ltd",category:"Earth Work",boq:"Cement",balance:"20",date:"25-Nov-2019",variance:"83"},
    {sno:"4",project:"EAI Ltd",category:"Foundation",boq:"Concrete",balance:"20",date:"25-Nov-2019",variance:"83"},
    {sno:"5",project:"ABC Ltd",category:"Earth Work",boq:"Cement",balance:"20",date:"25-Nov-2019",variance:"83"}



  ]

  openAddItemDialog(){
    this.dialog.open(AddItemDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
