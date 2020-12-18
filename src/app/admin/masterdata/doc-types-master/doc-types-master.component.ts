import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
// import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { AlertService } from '../../../shared/services/alert.service';
import { AddDocxComponent } from './add-docx/add-docx.component';

@Component({
  selector: 'app-doc-types-master',
  templateUrl: './doc-types-master.component.html',
  styleUrls: ['./doc-types-master.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AlertService]
})
export class DocTypesMasterComponent implements OnInit {

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  filterToggle: boolean;

  public searchText: string;
  public page: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
      public dialog: MatDialog, private alertService: AlertService) {
      this.settings = this.appSettings.settings;
  }

  ngOnInit() {

  }

  tableList = [
    {docType:"WORD",status:true},
    {docType:"EXCEL",status:true},
    {docType:"PPT",status:true},
    {docType:".TXT",status:true},
    {docType:"JPEG",status:true},
    {docType:"PNG",status:true},
    {docType:"PDF",status:true},
    {docType:"SVG",status:true}
  ]

  public openUserDialog(id) {
      let dialogRef = this.dialog.open(AddDocxComponent, {
          data: id,
          height: 'auto',
          width: '600px'
      });
      dialogRef.afterClosed().subscribe(data => {
      });
  }


  deleteUser(){
      this.alertService.createAlert('Successfully deleted.', 1);
  }

  saveStatus() {
      this.alertService.createAlert('Successfully saved.', 1);
  }

}
