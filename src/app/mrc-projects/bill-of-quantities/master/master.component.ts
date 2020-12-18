import { MatDialog } from '@angular/material';
import { UploadBoqComponent } from './upload-boq/upload-boq.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

filterToggle:boolean;




  items=[
    {"serial":"3.1","category":"Electrical","description":"Air Conditionar Blowner","unit":"Pcs","qty":"670","rate":"60000","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"4.1","category":"Mechanical","description":"Benches for guests","unit":"Pcs","qty":"670","rate":"6000","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"5.1","category":"Civil","description":"Slab Work","unit":"Cum","qty":"670","rate":"15000","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"6.1","category":"Plumbing","description":"Water Pipe","unit":"Pcs","qty":"670","rate":"2000","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"3.2","category":"Electrical","description":"Cooler","unit":"Pcs","qty":"670","rate":"8000","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},

  ]

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }




  public opencontactDialog() {
    let dialogRef = this.dialog.open(UploadBoqComponent, {
        height: 'auto',
        width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}
}
