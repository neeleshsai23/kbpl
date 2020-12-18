import { AddLabComponent } from './add-lab/add-lab.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-lab-master',
  templateUrl: './lab-master.component.html',
  styleUrls: ['./lab-master.component.scss']
})
export class LabMasterComponent implements OnInit {
  items=[
    { "Sc_Name" : "Action Lab Limited","Sc_Code":"ALL/1235","Contact_Person":"Amith","Email" : "amit@ael.com","Phone" : "8752697882","Address": "Street No-13,Sector 42","City":"Gurugram","State":"Haryana","GSTIN":"GSTIN57826787"},
    { "Sc_Name" : "Indo US","Sc_Code":"IUS/4455","Contact_Person":"Mary","Email" : "mary@bhel.com","Phone" : "9243868619","Address": "Road No-12","City":"Gandhi nagar","State":"Gujarat","GSTIN":"GSTIN93626827"},
    { "Sc_Name" : "HAL ","Sc_Code":"HAL/1021","Contact_Person":"Karthik","Email" : "karthik@hal.com","Phone" : "6826293682","Address": "8Incline Colony","City":"Bangalore","State":"Karnataka","GSTIN":"GSTIN5628360"},
    { "Sc_Name" : "Census","Sc_Code":"Census/2778","Contact_Person":"Sainath","Email" : "sainath@census.com","Phone" : "9278268222","Address": "karolbagh area","City":"Hyderabad","State":"Telangana","GSTIN":"GSTIN72537590"},
    { "Sc_Name" : "FCI","Sc_Code":"FCI/1235","Contact_Person":"Jeswin","Email" : "jeswin@fci.com","Phone" : "8267279272","Address": "Street No-1","City":"Gurugram","State":"Haryana","GSTIN":"GSTIN57826787"},
    ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openAdd() {
    let dialogRef = this.dialog.open(AddLabComponent, {
      
      height: 'auto',
      width: '700px',
      autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {
     
    });
  }
}
