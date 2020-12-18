import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AllocateDriverDialogComponent } from '../list-without-drivers/allocate-driver-dialog/allocate-driver-dialog.component';
import {TrafficViolationsDialogComponent} from './traffic-violations-dialog/traffic-violations-dialog.component';
import {ViolationHistoryDialogComponent} from './violation-history-dialog/violation-history-dialog.component';

@Component({
  selector: 'app-list-with-drivers',
  templateUrl: './list-with-drivers.component.html',
  styleUrls: ['./list-with-drivers.component.scss']
})
export class ListWithDriversComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  filterToggle:boolean = false;

  values = [
    {"driver":"Yes","vehicleno":"DL1GC5038","equipment":"Bull Dozer","project":"MRC","projectcode":"PRO-001","client":"Robert Singh","drivername":"Ram Kumar","licenseno":"DL12131243","licensevalidity":"26-OCT-2025","allocationby":"Bhagat","allocationdt":"25-NOV-2020 11:36 A.M"},
    {"driver":"Yes","vehicleno":"DL1GC5038","equipment":"Bull Dozer","project":"MRC","projectcode":"PRO-001","client":"Robert Singh","drivername":"Ram Kumar","licenseno":"DL12131243","licensevalidity":"26-OCT-2025","allocationby":"Bhagat","allocationdt":"25-NOV-2020 11:36 A.M"},
   ]

  values1 = [
    {"vehicleno":"DL1GC5038","equipment":"Bull Dozer","project":"MRC","projectcode":"PRO-001","client":"Robert Singh","drivername":"-","licenseno":"-","licensevalidity":"-","allocationby":"-","allocationdt":"-"},
    {"vehicleno":"DL1GC5038","equipment":"Bull Dozer","project":"MRC","projectcode":"PRO-001","client":"Robert Singh","drivername":"-","licenseno":"-","licensevalidity":"-","allocationby":"-","allocationdt":"-"}
  
  ]

  public pageSize = 4;
  public currentPage = 0;
  public totalSize = 0;

  openViolationsDialog(){
    this.dialog.open(TrafficViolationsDialogComponent,{
      width:"800px",
      height:"auto"
    })
  }

  openHistoryDialog(){
    this.dialog.open(ViolationHistoryDialogComponent,{
      width:"750px",
      height:"auto"
    })
  }

  openAllocateDialog(){
    this.dialog.open(AllocateDriverDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
