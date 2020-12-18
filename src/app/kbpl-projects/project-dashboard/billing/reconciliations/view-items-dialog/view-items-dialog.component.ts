import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-view-items-dialog',
  templateUrl: './view-items-dialog.component.html',
  styleUrls: ['./view-items-dialog.component.scss']
})
export class ViewItemsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewItemsDialogComponent>) { }

  ngOnInit() {
  }

  values: any =[
    {name:"Springs",code:"MRC/2546",opening:"120",added:"500",used:"450",book:"170",physical:"171",variance:"+1",loss:-78},
    {name:"Couplings",code:"MRC/786",opening:"79",added:"100",used:"50",book:"129",physical:"128",variance:"-1",loss:120},
    {name:"Springs",code:"MRC/2546",opening:"120",added:"500",used:"450",book:"170",physical:"171",variance:"+1",loss:-78},
    {name:"Couplings",code:"MRC/786",opening:"79",added:"100",used:"50",book:"129",physical:"128",variance:"-1",loss:120},
    {name:"Springs",code:"MRC/2546",opening:"120",added:"500",used:"450",book:"170",physical:"171",variance:"+1",loss:-78},
    {name:"Couplings",code:"MRC/786",opening:"79",added:"100",used:"50",book:"129",physical:"128",variance:"-1",loss:120},
    {name:"Springs",code:"MRC/2546",opening:"120",added:"500",used:"450",book:"170",physical:"171",variance:"+1",loss:-78},
    {name:"Couplings",code:"MRC/786",opening:"79",added:"100",used:"50",book:"129",physical:"128",variance:"-1",loss:120}

  ]

  close(){
    this.dialogRef.close()
  }

}
