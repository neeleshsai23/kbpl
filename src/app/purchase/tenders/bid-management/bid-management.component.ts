import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bid-management',
  templateUrl: './bid-management.component.html',
  styleUrls: ['./bid-management.component.scss']
})
export class BidManagementComponent implements OnInit {
  items=[
    { "Select_Category" : "Electrical","Select_Item" : "Switches","Unit" : "Pcs","Quantity" : "4","Remarks" : "Good Quality ","Select_Vendor" : "Orient","Rates" : "7"},
    { "Select_Category" : "Plumbing","Select_Item" : "Pipes","Unit" : "Pcs","Quantity" : "12","Remarks" : "Good Quality ","Select_Vendor" : "Sudhakar","Rates" : "5"},
    { "Select_Category" : "Civil","Select_Item" : "Cement","Unit" : "Qtls","Quantity" : "7","Remarks" : "Good Quality ","Select_Vendor" : "Birla","Rates" : "3"},
    { "Select_Category" : "Furniture","Select_Item" : "Tables","Unit" : "Pcs","Quantity" : "5","Remarks" : "Good Quality ","Select_Vendor" : "Damro","Rates" : "9"},
    { "Select_Category" : "Electrical","Select_Item" : "Fans","Unit" : "Pcs","Quantity" : "3","Remarks" : "Good Quality ","Select_Vendor" : "Orient","Rates" : "2"},
    ]
  constructor() { }

  ngOnInit() {
  }

}
