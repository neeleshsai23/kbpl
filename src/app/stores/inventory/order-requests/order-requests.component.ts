import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {GridColumnsOrderRequestsComponent} from './grid-columns-order-requests/grid-columns-order-requests.component';
import {RequestOrderDialogComponent} from './request-order-dialog/request-order-dialog.component';

@Component({
  selector: 'app-order-requests',
  templateUrl: './order-requests.component.html',
  styleUrls: ['./order-requests.component.scss']
})
export class OrderRequestsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

  values = [
    {request:"GV325",contract:"GV Contractors",category:"Electrical",item:"Wires",unit:"Pcs",qty:"100",requestdate:"05-Dec-2020",required:"15-Dec-2020"},
    {request:"HB423",contract:"HBVC Systems",category:"Plumbing",item:"Pipes",unit:"Pcs",qty:"50",requestdate:"05-Jun-2020",required:"10-July-2020"},
    {request:"AB615",contract:"ABC Contractors",category:"Earth Work",item:"Cement",unit:"Bags",qty:"200",requestdate:"05-Nov-2020",required:"05-Dec-2020"}


  ]

  openGridColumnsDialog(){
    this.dialog.open(GridColumnsOrderRequestsComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openRequestOrderDialog(){
    this.dialog.open(RequestOrderDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
