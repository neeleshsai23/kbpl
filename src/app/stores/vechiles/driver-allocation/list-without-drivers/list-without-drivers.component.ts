import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AllocateDriverDialogComponent} from './allocate-driver-dialog/allocate-driver-dialog.component';

@Component({
  selector: 'app-list-without-drivers',
  templateUrl: './list-without-drivers.component.html',
  styleUrls: ['./list-without-drivers.component.scss']
})
export class ListWithoutDriversComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  public pageSize = 4;
  public currentPage = 0;
  public totalSize = 0;

  values = [
    {"vehicleno":"DL1GC5038","equipment":"Bull Dozer","project":"MRC","projectcode":"PRO-001","client":"Robert Singh","drivername":"-","licenseno":"-","licensevalidity":"-","allocationby":"-","allocationdt":"-"},
    {"vehicleno":"DL1GC5038","equipment":"Bull Dozer","project":"MRC","projectcode":"PRO-001","client":"Robert Singh","drivername":"-","licenseno":"-","licensevalidity":"-","allocationby":"-","allocationdt":"-"}
  ]

  openAllocateDialog(){
    this.dialog.open(AllocateDriverDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
