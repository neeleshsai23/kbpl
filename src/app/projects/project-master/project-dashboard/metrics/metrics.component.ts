import { Component } from '@angular/core';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent {
  
  pageEvent: PageEvent;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  public single: any[];
  public multi: any[];
  public triple: any[];
  public multiTriple : any[];
  public autoScale = true;
  public showLegend = false;
  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Days';
  public showYAxisLabel = true;
  public yAxisLabel = 'Tasks';
  public gradient = false;
  public gradient2 = false;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public showLegend2 = false
  
  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings; 
    const single = [
      {
        name: 'On Time',
        value: 30
      },
      {
        name: 'In Process',
        value: 47
      },
      {
        name: 'Delayed',
        value: 20
      }
    ];
    const triple = [
      {
        name: 'Concept',
        value: 30
      },
      {
        name: 'Engineering',
        value: 47
      },
      {
        name: 'Design',
        value: 20
      },
      {
        name: 'Pilot',
        value: 25
      },
      {
        name: 'Production',
        value: 36
      }
    ];
    const multiTriple = [
      {
        name: 'Induction',
        value: 95
      },
      {
        name: 'Concept Development',
        value: 80
      },
      {
        name: 'Product Development',
        value: 92
      },
      {
        name: 'Kitchen Implementation',
        value: 68
      },
    ];
    // const multi = [
    //   {
    //     "name": "January",
    //     "value": 12
    //   },
    //   {
    //     "name": "February",
    //     "value": 9
    //   },
    
    //   {
    //     "name": "March",
    //     "value": 5
    //   },
    //   {
    //     "name": "April",
    //     "value": 9
    //   },
    //   {
    //     "name": "May",
    //     "value": 1
    //   },
    //   {
    //     "name": "june",
    //     "value": 11
    //   },
    //   {
    //     "name": "July",
    //     "value": 9
    //   },
    //   {
    //     "name": "August",
    //     "value": 2
    //   },
    //   {
    //     "name": "September",
    //     "value": 3
    //   },
    //   {
    //     "name": "October",
    //     "value": 8
    //   },
    //   {
    //     "name": "November",
    //     "value": 6
    //   },
    //   {
    //     "name": "December",
    //     "value": 10
    //   }
    
    
    
    // ];
    const multi = [
      {
        name: 'Tasks',
        series: [
          {
            name: '1',
            value: 1
          },
          {
            name: '2',
            value: 2
          },
          {
            name: '3',
            value: 1
          },
          {
            name: '4',
            value: 4
          },
          {
            name: '5',
            value: 3
          },
          {
            name: '6',
            value: 4
          },
          {
            name: '7',
            value: 2
          },
          {
            name: '8',
            value: 3
          },
          {
            name: '9',
            value: 1
          },
          {
            name: '10',
            value: 4
          },
          {
            name: '11',
            value: 1
          },
          {
            name: '12',
            value: 3
          },
          {
            name: '13',
            value: 4
          },
          {
            name: '14',
            value: 2
          },
          {
            name: '15',
            value: 3
          },
          {
            name: '16',
            value: 1
          },
          {
            name: '17',
            value: 1
          },
          {
            name: '18',
            value: 4
          },
          {
            name: '19',
            value: 3
          },
          {
            name: '20',
            value: 2
          },
          {
            name: '21',
            value: 2
          },
          {
            name: '22',
            value: 1
          },
          {
            name: '23',
            value: 3
          },
          {
            name: '24',
            value: 4
          },
          {
            name: '25',
            value: 4
          },
          {
            name: '26',
            value: 3
          },
          {
            name: '27',
            value: 1
          },
          {
            name: '28',
            value: 4
          },
          {
            name: '29',
            value: 1
          },
          {
            name: '30',
            value: 3
          }
        ]
      },
      
    ];
    Object.assign(this, {single, multi,triple,multiTriple}); 
  }
  
  public onSelect(event) {
    console.log(event);
  }
  
  totalProjects = [
    {clientname:"50",projectStage:"Concept",tasksCompleted:"5",phone:"Active",expected:"2020-10-26",inProcess:"8",delayed:"0",notStarted:"12",exceptions:"5",taskStatus:"Ideation",completion:"50",target:"2020-10-30"},
    {clientname:"30",projectStage:"Engineering",tasksCompleted:"8",phone:"In-active",expected:"2020-10-28",inProcess:"12",delayed:"1",notStarted:"14",exceptions:"3",taskStatus:"Concept Development",completion:"60",target:"2020-10-30"},
    {clientname:"60",projectStage:"Design",tasksCompleted:"2",phone:"Active",expected:"2020-10-30",inProcess:"2",delayed:"5",notStarted:"10",exceptions:"2",taskStatus:"Product Development",completion:"90",target:"2020-11-15"},
    {clientname:"80",projectStage:"Pilot",tasksCompleted:"10",phone:"Active",expected:"2020-11-10",inProcess:"1",delayed:"2",notStarted:"22",exceptions:"12",taskStatus:"Ideation",completion:"10",target:"2020-11-25"},
    {clientname:"25",projectStage:"Production",tasksCompleted:"20",phone:"In-active",expected:"2020-11-15",inProcess:"10",delayed:"0",notStarted:"0",exceptions:"10",taskStatus:"Concept Development",completion:"30",target:"2020-12-22"},
    // {clientname:"50",projectStage:"Engineering",tasksCompleted:"5",phone:"Active",expected:"2020-10-26",inProcess:"8",delayed:"0",notStarted:"12",exceptions:"5",taskStatus:"Ideation",completion:"50",target:"2020-10-30"},
    // {clientname:"30",projectStage:"Design",tasksCompleted:"8",phone:"In-active",expected:"2020-10-28",inProcess:"12",delayed:"1",notStarted:"14",exceptions:"3",taskStatus:"Product Development",completion:"60",target:"2020-10-30"},
    // {clientname:"60",projectStage:"Engineering",tasksCompleted:"2",phone:"Active",expected:"2020-10-30",inProcess:"2",delayed:"5",notStarted:"10",exceptions:"2",taskStatus:"Ideation",completion:"90",target:"2020-11-15"},
    // {clientname:"80",projectStage:"Production",tasksCompleted:"10",phone:"Active",expected:"2020-11-10",inProcess:"1",delayed:"2",notStarted:"22",exceptions:"12",taskStatus:"Concept Development",completion:"10",target:"2020-11-25"},
    // {clientname:"25",projectStage:"Concept",tasksCompleted:"20",phone:"In-active",expected:"2020-11-15",inProcess:"10",delayed:"0",notStarted:"0",exceptions:"10",taskStatus:"Product Development",completion:"30",target:"2020-12-22"},
    // {clientname:"50",projectStage:"Engineering",tasksCompleted:"5",phone:"Active",expected:"2020-10-26",inProcess:"8",delayed:"0",notStarted:"12",exceptions:"5",taskStatus:"Ideation",completion:"50",target:"2020-10-30"},
    // {clientname:"30",projectStage:"Design",tasksCompleted:"8",phone:"In-active",expected:"2020-10-28",inProcess:"12",delayed:"1",notStarted:"14",exceptions:"3",taskStatus:"Product Development",completion:"60",target:"2020-10-30"},
    // {clientname:"60",projectStage:"Engineering",tasksCompleted:"2",phone:"Active",expected:"2020-10-30",inProcess:"2",delayed:"5",notStarted:"10",exceptions:"2",taskStatus:"Ideation",completion:"90",target:"2020-11-15"},
    // {clientname:"80",projectStage:"Production",tasksCompleted:"10",phone:"Active",expected:"2020-11-10",inProcess:"1",delayed:"2",notStarted:"22",exceptions:"12",taskStatus:"Concept Development",completion:"10",target:"2020-11-25"},
    // {clientname:"25",projectStage:"Concept",tasksCompleted:"20",phone:"In-active",expected:"2020-11-15",inProcess:"10",delayed:"0",notStarted:"0",exceptions:"10",taskStatus:"Ideation",completion:"30",target:"2020-12-22"},
    // {clientname:"50",projectStage:"Engineering",tasksCompleted:"5",phone:"Active",expected:"2020-10-26",inProcess:"8",delayed:"0",notStarted:"12",exceptions:"5",taskStatus:"Concept Development",completion:"50",target:"2020-10-30"},
    // {clientname:"30",projectStage:"Design",tasksCompleted:"8",phone:"In-active",expected:"2020-10-28",inProcess:"12",delayed:"1",notStarted:"14",exceptions:"3",taskStatus:"Product Development",completion:"60",target:"2020-10-30"},
    // {clientname:"60",projectStage:"Engineering",tasksCompleted:"2",phone:"Active",expected:"2020-10-30",inProcess:"2",delayed:"5",notStarted:"10",exceptions:"2",taskStatus:"Concept Development",completion:"90",target:"2020-11-15"},
    // {clientname:"80",projectStage:"Production",tasksCompleted:"10",phone:"Active",expected:"2020-11-10",inProcess:"1",delayed:"2",notStarted:"22",exceptions:"12",taskStatus:"Ideation",completion:"10",target:"2020-11-25"},
    // {clientname:"25",projectStage:"Concept",tasksCompleted:"20",phone:"In-active",expected:"2020-11-15",inProcess:"10",delayed:"0",notStarted:"0",exceptions:"10",taskStatus:"Product Development",completion:"30",target:"2020-12-22"},
  ]
  
}
