import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {AddWorkRecordDialogComponent} from './add-work-record-dialog/add-work-record-dialog.component';
import {WorkHistoryDialogComponent} from './work-history-dialog/work-history-dialog.component';

@Component({
  selector: 'app-work-records',
  templateUrl: './work-records.component.html',
  styleUrls: ['./work-records.component.scss']
})
export class WorkRecordsComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  values = [
    {"vehicleno":"DL1GC5038","equipment":"Bull Dozer","project":"MRC","projectcode":"PRO-001","client":"Robert Singh","drivername":"Ram Kumar","siteno":"SITE-0012","workdone":"Push large quantities of soil &  similar material at the particular site","workdate":"25-Nov-2020","days":"15","remaining":"10","logged":"Shiva"},
    {"vehicleno":"DL1GC5038","equipment":"Bull Dozer","project":"MRC","projectcode":"PRO-001","client":"Robert Singh","drivername":"Ram Kumar","siteno":"SITE-0012","workdone":"Push large quantities of soil &  similar material at the particular site","workdate":"26-Nov-2020","days":"10","remaining":"5","logged":"Shiva"}

  ]

  public pageSize = 4;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;


  openAddWorkRecordDialog(){
    this.dialog.open(AddWorkRecordDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openWorkHistoryDialog(){
    this.dialog.open(WorkHistoryDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
