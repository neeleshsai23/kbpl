import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boq-consumption',
  templateUrl: './boq-consumption.component.html',
  styleUrls: ['./boq-consumption.component.scss']
})
export class BoqConsumptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

  values = [
    {sno:"1",project:"ABC Ltd",category:"Earth Work",boq:"Cement",consumption:"567",items:"660",variance:"83"},
    {sno:"2",project:"EAI Ltd",category:"Foundation",boq:"Concrete",consumption:"567",items:"660",variance:"83"},
    {sno:"3",project:"ABC Ltd",category:"Earth Work",boq:"Cement",consumption:"567",items:"660",variance:"83"},
    {sno:"4",project:"EAI Ltd",category:"Foundation",boq:"Concrete",consumption:"567",items:"660",variance:"83"},
    {sno:"5",project:"ABC Ltd",category:"Earth Work",boq:"Cement",consumption:"567",items:"660",variance:"83"}



  ]

}
