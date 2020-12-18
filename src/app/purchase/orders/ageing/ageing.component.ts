import { Component, OnInit } from '@angular/core';
import { MatDialog ,PageEvent} from '@angular/material';


@Component({
  selector: 'app-ageing',
  templateUrl: './ageing.component.html',
  styleUrls: ['./ageing.component.scss']
})
export class AgeingComponent implements OnInit {

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
  {"vendor":"M/s Power Solutions","billfrom":"01/10/2020","billto":"02/11/2020","invoice":"MRC12524","date":"02/11/2020","amount":"1,24,500","duedate":"03/11/2020","dueamount":"34,500","duedays":"21 days"},
  {"vendor":"N/s Power Solutions","billfrom":"02/10/2020","billto":"03/11/2020","invoice":"MRC16544","date":"03/11/2020","amount":"1,34,500","duedate":"02/11/2020","dueamount":"35,500","duedays":"22 days"},
  {"vendor":"T/s Power Solutions","billfrom":"03/10/2020","billto":"04/11/2020","invoice":"MRC12564","date":"04/11/2020","amount":"1,44,500","duedate":"04/11/2020","dueamount":"36,500","duedays":"24 days"},
  {"vendor":"R/s Power Solutions","billfrom":"04/10/2020","billto":"05/11/2020","invoice":"MRC14554","date":"05/11/2020","amount":"1,54,500","duedate":"05/11/2020","dueamount":"34,500","duedays":"27 days"},
  {"vendor":"H/s Power Solutions","billfrom":"05/10/2020","billto":"06/11/2020","invoice":"MRC15524","date":"06/11/2020","amount":"1,26,500","duedate":"06/11/2020","dueamount":"38,500","duedays":"29 days"},
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
        name: '0-30',
        value:30
      },
      {
        name: '31-60',
        value:25
      },
      {
        name: '61-90',
        value: 15
      },
      {
        name: '>90',
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
        name: 'IBW',
        value: 10
      },
      {
        name: 'MRC',
        value: 13
      },
      {
        name: 'SG',
        value: 40
      },
      {
        name: 'Design',
        value: 40
      },

      

    ];
    Object.assign(this, { Due });
   }

  ngOnInit() {
  }



}
