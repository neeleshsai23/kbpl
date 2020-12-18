import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PageEvent, MatDialogRef } from '@angular/material';
import { Location } from '@angular/common';

@Component({
  selector: 'app-showpos',
  templateUrl: './showpos.component.html',
  styleUrls: ['./showpos.component.scss']
})
export class ShowposComponent implements OnInit {

  items=[
    {"serial":"3.1","category":"Electrical","description":"Wires","unit":"Qtls","Pcs":"170","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$10,200"},
    {"serial":"4.1","category":"Mechanical","description":"Screws","unit":"Qtls","Pcs":"100","rate":"$70","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$7000"},
    {"serial":"5.1","category":"Civil","description":"Slab Leveler","unit":"Qtls","Cum":"130","rate":"$40","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$5200"},
    {"serial":"6.1","category":"Plumbing","description":"Pipes","unit":"Qtls","qty":"Pcs","rate":"$80","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$13,600"},
    {"serial":"3.2","category":"Electrical","description":"Sockets","unit":"Pcs","qty":"70","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$4200"},

  ]

   
  constructor(public dialogRef: MatDialogRef<ShowposComponent>) { 
    
  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
