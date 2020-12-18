import { ShowposComponent } from './showpos/showpos.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GeneratepoComponent } from './generatepo/generatepo.component';

@Component({
  selector: 'app-po',
  templateUrl: './po.component.html',
  styleUrls: ['./po.component.scss']
})
export class PoComponent implements OnInit {

  
items=[
  {"podate":"15/11/2020","ref":"PO/MRC/151","vendor":"M/s Solutions Pvt Ltd","podue":"20/11/2020","items":"5","status":"Approved"},
  {"podate":"16/11/2020","ref":"PO/MRC/152","vendor":"Ram Solutions Pvt Ltd","podue":"21/11/2020","items":"5","status":"Approved"},
  {"podate":"17/11/2020","ref":"PO/MRC/153","vendor":"Parmeet Solutions Pvt Ltd","podue":"22/11/2020","items":"5","status":"Approved"},
  {"podate":"18/11/2020","ref":"PO/MRC/154","vendor":"TS Solutions Pvt Ltd","podue":"23/11/2020","items":"5","status":"pending"},
  {"podate":"19/11/2020","ref":"PO/MRC/155","vendor":"k/s Solutions Pvt Ltd","podue":"24/11/2020","items":"5","status":"Approved"},
  ]
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  matQuantity = [
    {matItemCode:"MG-0001" , matName:"Cetex Lithium Silicate" , avaiQuantity:"5594" , units:"Kg"},
    {matItemCode:"MG-0002" , matName:"Polyvinyl sheet 200 Microns" , avaiQuantity:"5924" , units:"Nos"},
    {matItemCode:"MG-0003" , matName:"Plate dowels Plastic Sleeve" , avaiQuantity:"4000" , units:"Kg"},
    {matItemCode:"MG-0004" , matName:"Ideal Joint Classic 125mm Thick" , avaiQuantity:"120" , units:"Box"},
    {matItemCode:"MG-0005" , matName:"ROT Blade" , avaiQuantity:"50" , units:"Set"},
    {matItemCode:"MG-0006" , matName:"SIKA Chapdur" , avaiQuantity:"2000" , units:"Kg"},
    {matItemCode:"MG-0007" , matName:"MS Plate dowels 100x150x6mm" , avaiQuantity:"1000" , units:"Nos"},
    {matItemCode:"MG-0008" , matName:"Saw Cutting blade (14)" , avaiQuantity:"86" , units:"Kg"},
    {matItemCode:"MG-0009" , matName:"6 MM EPE Backer Rod" , avaiQuantity:"9870" , units:"Box"},
    {matItemCode:"MG-0010" , matName:"Cetex-Curing Chemical" , avaiQuantity:"90" , units:"Set"},
  ]

  addpo() {
    let dialogRef = this.dialog.open(GeneratepoComponent, {
    
      height: 'auto',
      width: '700px',
      autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {
      if(data == 'save') {
      }
    });
  }
  showitems() {
    let dialogRef = this.dialog.open(ShowposComponent, {
    
      height: 'auto',
      width: '700px',
      autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {
      if(data == 'save') {
      }
    });
  }

}
