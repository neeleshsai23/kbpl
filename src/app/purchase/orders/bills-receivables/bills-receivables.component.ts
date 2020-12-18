import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bills-receivables',
  templateUrl: './bills-receivables.component.html',
  styleUrls: ['./bills-receivables.component.scss']
})
export class BillsReceivablesComponent implements OnInit {
  items = [
    // tslint:disable-next-line: max-line-length
    { 'PO' : 'Hyderabad - Ayyapa Scty' , 'C': '0', 'Ref' : 'WO/MRC/151', 'Sub': 'Electrical', 'POC': '20-Nov-2020', 'POD': '21-Nov-2020', 'POV': '37,580', 'POB': 'view'},
    // tslint:disable-next-line: max-line-length
    { 'PO' : '18-Jan-2019' , 'C': '0', 'Ref' : 'WO/MRC/146', 'Sub': 'Plumbing', 'POC': '18-Jan-2020', 'POD': '18-Jan-2021', 'POV': '0', 'POB': 'view'},
    // tslint:disable-next-line: max-line-length
    { 'PO' : '19-Sep-2005' , 'C': '0', 'Ref' : 'WO/MRC/157', 'Sub': 'Civil', 'POC': '19-Sep-2006', 'POD': '19-Sep-2007', 'POV': '0', 'POB': 'view'},
    { 'PO' : '15-Nov-2020' , 'C': '0', 'Ref' : 'WO/MRC/171', 'Sub': 'Furniture', 'POC': '20-Nov-2020', 'POD': '20-Nov-2021', 'POV': '26,467', 'POB': 'view'},
    { 'PO' : '1-Dec-2009' , 'C': '0', 'Ref' : 'WO/MRC/172', 'Sub': 'Electrical', 'POC': '1-Dec-2009', 'POD': '1-Dec-2010', 'POV': '5678', 'POB': 'view'},
    { 'PO' : 'Hyderabad - Madhapur' , 'C': '3', 'Ref' : 'WO/MRC/171', 'Sub': 'Furniture', 'POC': '20-Nov-2020', 'POD': '20-Nov-2021', 'POV': '45,678', 'POB': 'view'},
    { 'PO' : '1-Dec-2009' , 'C': '3', 'Ref' : 'WO/MRC/172', 'Sub': 'Electrical', 'POC': '1-Dec-2009', 'POD': '1-Dec-2010', 'POV': '45,678', 'POB': 'view'},
  ];
  public filterToggle:boolean;
  public filterToggle1:boolean;
  public filterToggle2:boolean;
  constructor() { }

  ngOnInit() {
  }

}
