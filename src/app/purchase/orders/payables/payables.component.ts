import { AddPayableComponent } from './add-payable/add-payable.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog ,PageEvent} from '@angular/material';

@Component({
  selector: 'app-payables',
  templateUrl: './payables.component.html',
  styleUrls: ['./payables.component.scss']
})
export class PayablesComponent implements OnInit {

  Customers = [];
  filterToggle1:boolean
  filterToggle2:boolean
  ageing:boolean
  public DueCollection:any[];
  public Due:any[]
  public OverDue:any[];
  public showLegend = false;
  public gradient = false;
  type = 2;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;

  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';

  showEmpty: boolean = false;

  pageEvent: PageEvent;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  public page: any;
  public tableLists: any;
  public duelist: any;
  public tableList: any;
  single: { name: string; value: number; }[];


  
items=[
  {"vendor":"M/s Power Solutions","invoice":"MRC/PS/152","amount":"1200","charges":"50","total":"1250","incharge":"Parmeet","duedate":"01/10/2020","remarks":"It is due for 1 Dec 2020","paymemnt":"View","status":"Approved"},
  {"vendor":"Tata Solutions","invoice":"MRC/PS/153","amount":"1300","charges":"60","total":"1260","incharge":"Parmeet","duedate":"02/10/2020","remarks":"It is due for 2 Dec 2020","paymemnt":"View","status":"Approved"},
  {"vendor":"T/s Power Solutions","invoice":"MRC/PS/154","amount":"1400","charges":"70","total":"1270","incharge":"Aman","duedate":"03/10/2020","remarks":"It is due for 3 Dec 2020","paymemnt":"View","status":"Approved"},
  {"vendor":"D/s Power Solutions","invoice":"MRC/PS/155","amount":"1500","charges":"80","total":"1280","incharge":"Rakesh","duedate":"04/10/2020","remarks":"It is due for 4 Dec 2020","paymemnt":"View","status":"Declined"},
  {"vendor":"R/s Power Solutions","invoice":"MRC/PS/156","amount":"1600","charges":"90","total":"1290","incharge":"Aman","duedate":"05/10/2020","remarks":"It is due for 5 Dec 2020","paymemnt":"View","status":"Approved"}
  ]
  
  
  
  
  
  
  
 
    
  constructor(public dialog: MatDialog) {
    this.single = [
      {
        "name": "Revenue Saved",
        "value": 40
      },
      {
        "name": "Dues",
        "value": 60
      },
      {
        "name": "Over Dues",
        "value": 90
      },
      {
        "name": "Paid",
        "value": 100
      } 
    ];

    const DueCollection = [
      {
        name: 'Total Collected (3.2 Cr)',
        value: 3.2
      },
      {
        name: 'Total Dues (8.2 Cr)',
        value: 8.2
      }

    ];

    Object.assign(this, { DueCollection });

    const OverDue = [
      {
        name: 'M/s Power Solutions',
        value:40
      },
      {
        name: ' Bharath Powers',
        value: 30
      },
      {
        name: 'First Choice Pvt Ltd',
        value: 30
      }

    ];
    Object.assign(this, { OverDue });

    this.Customers = [
      {
        name: 'Amazon',
        value: 10
      },
      {
        name: 'Flipkart',
        value: 13
      },
      {
        name: 'Reliance',
        value: 40
      },
      {
        name: 'Shopkart',
        value: 40
      },

      

    ];
    // Object.assign(this, { Customers });

    const Due = [
      {
        name: 'North 1',
        value: 10
      },
      {
        name: 'South 1',
        value: 13
      },
      {
        name: 'West 2',
        value: 40
      },
      {
        name: 'North 2',
        value: 40
      },

      

    ];
    Object.assign(this, { Due });
   }

  ngOnInit() {
  }

  public addpayable(){
    let dialogRef = this.dialog.open(AddPayableComponent, {
     
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }


}
