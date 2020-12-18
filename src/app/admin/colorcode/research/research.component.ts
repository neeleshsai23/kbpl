import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddColorcodeDialogComponent } from '../add-colorcode-dialog/add-colorcode-dialog.component';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  providers:[AlertService]
  // styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  constructor(public dialog: MatDialog,public alertService:AlertService) { }

  colorCodes = [
    {id:1,color_code:"#929292",color_code_name:"Excluded",color_description:"Remove from the list",is_default:0},
    {id:2,color_code:"#ffff00",color_code_name:"Interested",color_description:"Has a need for software development",is_default:1},
    {id:3,color_code:"#79b1e3",color_code_name:"Profile",color_description:"Profile Requested",is_default:0},
    {id:4,color_code:"#808000",color_code_name:"Maybe Later",color_description:"Contact Later",is_default:0},
    {id:5,color_code:"#00ffff",color_code_name:"Meeting",color_description:"Meeting Confirmed",is_default:0}
  ]

  ngOnInit() {
  }

  updateColorCode(code) {
    for(let i = 0 ; i < this.colorCodes.length ; i++) {
      if(code.id == this.colorCodes[i].id)
      this.colorCodes[i].is_default = 1;
      else
      this.colorCodes[i].is_default = 0;
    }
  }

  public openUserDialog(lead) {
    let dialogRef = this.dialog.open(AddColorcodeDialogComponent, {
        data: lead,
        height: 'auto',
        width: '600px',
    });

    dialogRef.afterClosed().subscribe(lead => {
        if (lead) {
            // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
        }
    });
}

deletColor(){
  this.alertService.createAlert('Successfully deleted.', 1);
}

}
