import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {LimitHistoryDialogComponent} from './limit-history-dialog/limit-history-dialog.component';

@Component({
  selector: 'app-fuel-consumption',
  templateUrl: './fuel-consumption.component.html',
  styleUrls: ['./fuel-consumption.component.scss']
})
export class FuelConsumptionComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  filterToggle:boolean = false;

  public pageSize = 4;
  public currentPage = 0;
  public totalSize = 0;

  values = [
    {"vehicleno":"DL1GC5038","equipment":"Bull Dozer","project":"MRC","projectcode":"PRO-001","client":"Robert Singh","drivername":"Ram Kumar","allocateduser":"Shiva Kumar","normallimit":"150 Lts/100 KM","fuelreader":"Oedometer","runninglimit":"100 Lts/100 KM","lastupdated":"150 Lts/100 KM"},
    {"vehicleno":"DL1GC5038","equipment":"Bull Dozer","project":"MRC","projectcode":"PRO-001","client":"Robert Singh","drivername":"Ram Kumar","allocateduser":"Dhawal Verma","normallimit":"150 Lts/100 KM","fuelreader":"Feather Fooling","runninglimit":"100 Lts/100 KM","lastupdated":"150 Lts/100 KM"}

  ]

  openLimitingHistoryDialog(){
    this.dialog.open(LimitHistoryDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
