import { MrcGridcolumsComponent } from './mrc-gridcolums/mrc-gridcolums.component';
import { Settings } from './../../app.settings.model';
import { Component, OnInit } from '@angular/core';
import { MrcAddProjectDialogComponent } from './mrc-add-project-dialog/mrc-add-project-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog, PageEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AppSettings } from 'src/app/app.settings';


@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']
})
export class ProjectManagementComponent implements OnInit {

 public single: any[];
  public sizes: any[];
  public colors: any[];
  public width: any[];
  public countries: any[];
  public singles: any[];
  public multi: any[];
  public analytics: any[];
  public showLegend = true;
  public showLegends = false;
  public gradient = true;
  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = false;
  public xAxisLabel = 'Year';
  public showYAxisLabel = false;
  public yAxisLabel = 'Population';
  public filterToggle:boolean;
  public filterToggle1:boolean;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public autoScale = true; 


items=[
  {category:'Underground',invoices:"3/7","project_code":"2478BA","project_name":"MRC ","client":"Robert ","consultant":"FastTrack ","BOQ_Items":"120/173","la":" 244","la_date":"12/02/2020 ",          "agreement":"343",    "agreement_date":"13/03/2020","start_date":"14/04/2020","target_date":"16/06/2020 ","total_cost":"70","billed":"70","paid":"35","margin":"30 ","Status":"Completed ","Completion":"90%" },                                                           
  {category:'Surface',invoices:"4/7","project_code":"3478BA","project_name":"MPK ","client":"John ","consultant":"Design ","BOQ_Items":"350/456","la":" 245","la_date":" 3/02/2020",                "agreement":" 323",   "agreement_date":"14/03/2020","start_date":"15/04/2020","target_date":"17/06/2020 ","total_cost":"71","billed":"70","paid":"35","margin":"31 ","Status":" Completed","Completion":"20%" },  
  {category:'Civil Site',invoices:"5/7","project_code":"4478BA","project_name":"Becon","client":"Singh ","consultant":" Stone Factory","BOQ_Items":"220/150","la":"246 ","la_date":"13/02/2020 ",      "agreement":"265",    "agreement_date":"15/03/2020","start_date":"16/04/2020","target_date":"18/06/2020 ","total_cost":"72","billed":"70","paid":"35","margin":"32 ","Status":"Completed " ,"Completion":"30%"},  
  {category:'Underground',invoices:"2/7","project_code":"5478BA","project_name":" IBW","client":" Anna","consultant":"Instant ","BOQ_Items":"198/120","la":"247 ","la_date":" 14/02/2020",              "agreement":"376 ",   "agreement_date":"16/03/2020","start_date":"17/04/2020","target_date":"19/06/2020 ","total_cost":"73","billed":"71","paid":"35","margin":"33 ","Status":"Process " ,"Completion":"40%"},  
  {category:'Surface',invoices:"3/7","project_code":"6478BA","project_name":"Sales Global ","client":"Mike ","consultant":"IBW ","BOQ_Items":"128/198","la":"248 ","la_date":"15/02/2020 ",         "agreement":"312 ",   "agreement_date":"17/03/2020","start_date":"18/04/2020","target_date":"11/06/2020 ","total_cost":"74","billed":"72","paid":"35","margin":"34 ","Status":"Process " ,"Completion":"90%"},  
  {category:'Underground',invoices:"3/7","project_code":"7478BA","project_name":"Instant ","client":"Jonny ","consultant":"Sales Global ","BOQ_Items":"127/127","la":"249 ","la_date":"16/02/2020 ",    "agreement":"367 ",   "agreement_date":"18/03/2020","start_date":"19/04/2020","target_date":"6/06/2020 ","total_cost":"75","billed":"73","paid":"35","margin":"35 ","Status":"Pending " ,"Completion":"20%"},  
  {category:'Underground',invoices:"5/7","project_code":"8478BA","project_name":"Stone factory ","client":" Randy","consultant":"becon","BOQ_Items":"128/129","la":"250 ","la_date":"17/02/2020 ",      "agreement":"276",    "agreement_date":"19/03/2020","start_date":"4/04/2020","target_date":"7/06/2020 ","total_cost":"76","billed":",70","paid":"3 ","margin":"30 ","Status":"Process " ,"Completion":"10%"},  
  {category:'Civil Site',invoices:"3/7","project_code":"9478BA","project_name":"Design ","client":" Rock","consultant":" MPK","BOQ_Items":"127/289","la":"261 ","la_date":" 18/02/2020",               "agreement":"288",   "agreement_date":"1/03/2020","start_date":"3/04/2020","target_date":"8/06/2020 ","total_cost":"77","billed":"75","paid":"35","margin":"37 ","Status":"Completed ","Completion":"55%" },  
  {category:'Underground',invoices:"2/7","project_code":"1478BA","project_name":" FastTrack","client":"Jack ","consultant":"MRC","BOQ_Items":"281/128","la":"233 ","la_date":"19/02/2020 ",             "agreement":"289",    "agreement_date":"2/03/2020","start_date":"5/04/2020","target_date":"10/06/2020 ","total_cost":"78","billed":"76","paid":"35","margin":"38 ","Status":"Completed ","Completion":"35%" },  
]
  constructor(public dialog: MatDialog,public appSettings:AppSettings) { 
    this.settings = this.appSettings.settings; 
    const single = [
      {
        name: 'Completed',
        value: 20
      },
      {
        name: 'Process',
        value: 70
      },
      {
        name: 'Pending',
        value: 10
      }
     
    ];
    const singles = [
      {
        name: 'Billed',
        value: 249
      },
      {
        name: 'Paid',
        value: 200
      },
      {
        name: 'Pending',
        value: 49
      }
     
    ];
    Object.assign(this, {single,singles}); 
  }

  ngOnInit() {
  }

  openProjectDialog(stat) {
    let dialogRef = this.dialog.open(MrcAddProjectDialogComponent, {
      data: stat,
      height: 'auto',
      width: '750px',
      autoFocus: false,
    });
  }
  openGridColumnsDialog() {
    let dialogRef = this.dialog.open(MrcGridcolumsComponent, {
   
      height: 'auto',
      width: '600px',
      autoFocus: false,
    });
    
    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {
        
      }
    });
  }

}
