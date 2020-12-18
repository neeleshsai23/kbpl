import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {GenerateRequestDialogComponent} from './generate-request-dialog/generate-request-dialog.component';
import {QuotePreviewDialogComponent} from './quote-preview-dialog/quote-preview-dialog.component';

@Component({
  selector: 'app-service-repairs',
  templateUrl: './service-repairs.component.html',
  styleUrls: ['./service-repairs.component.scss']
})
export class ServiceRepairsComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  values = [
    {"vehicleno":"DL1GC5038","equipment":"Bull Dozer","project":"MRC","projectcode":"PRO-001","client":"Robert Singh","driver":"Ram Kumar","service":"Reapir","quote":"1500","details":"Need to repair the lever part","requested":"Shiva","dt":"25-Nov-2020 11:45 PM","status":"-","approved":"-"},
    {"vehicleno":"DL1GC5038","equipment":"Bull Dozer","project":"MRC","projectcode":"PRO-001","client":"Robert Singh","driver":"Ram Kumar","service":"Reapir","quote":"1000","details":"Need to undergo maintenance of service blades","requested":"Shiva","dt":"25-Nov-2020 11:45 PM","status":"-","approved":"-"}

  ]

  public pageSize = 4;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;


  openGenerateRequestDialog(){
    this.dialog.open(GenerateRequestDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openQuotePreviewDialog(){
    this.dialog.open(QuotePreviewDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
