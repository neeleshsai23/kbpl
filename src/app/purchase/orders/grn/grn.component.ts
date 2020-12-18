import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grn',
  templateUrl: './grn.component.html',
  styleUrls: ['./grn.component.scss']
})
export class GrnComponent implements OnInit {
  items=[
    { "BN" : "Hyderabad - Ayyapa Scty","SN" :"M/s Power Solutions","Con":"OM/CON/APR-20","Status":"Consignment In-Transit","POR":"BGR/OM/BHL/20","POD":"20-APR-2020","POV":"43,678","POB":"35,877","No":"1"},
    { "BN" : "Hyderabad - Ayyapa Scty","SN" :"R/s Power Solutions","Con":"OM/CON/JAN-19","Status":"Consignment In-Transit","POR":"BGR/OM/BHL/19","POD":"5-JUN-2019","POV":"35,678","POB":"35,678","No":"1"},
    ]
  public filterToggle:boolean;
  public filterToggle1:boolean;
  public filterToggle2:boolean;
  constructor() { }

  ngOnInit() {
  }

}
