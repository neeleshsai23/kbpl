import { AddChallanComponent } from './add-challan/add-challan.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {


  
items=[
  {"service":"SC/MRC/2020/1568","vendor":"M/s Solutions","wo":"WO/MRC/153","po":"--","return":"20/11/2020","item":"Electrical"},
  {"service":"SC/MRC/2020/1368","vendor":"N/s Solutions","po":"PO/MRC/155","wo":"--","return":"21/11/2020","item":"Electrical"},
  {"service":"SC/MRC/2020/1668","vendor":"R/s Solutions","wo":"WO/MRC/156","po":"--","return":"22/11/2020","item":"Mechanical"},
  {"service":"SC/MRC/2020/1868","vendor":"Q/s Solutions","po":"PO/MRC/158","wo":"--","return":"23/11/2020","item":"Electrical"},
  {"service":"SC/MRC/2020/1268","vendor":"K/s Solutions","wo":"WO/MRC/159","po":"--","return":"24/11/2020","item":"Mechanical"},
  ]
  

constructor(public dialog: MatDialog) { }

ngOnInit() {
}
public addchallan() {
  let dialogRef = this.dialog.open(AddChallanComponent, {

    height: 'auto',
    width: '700px',
    autoFocus: false
  });
  dialogRef.afterClosed().subscribe(data => {

  });
}
}
