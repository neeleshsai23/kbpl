import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AddCheckListDialogComponent } from './add-checklist-dialog/add-checklist-dialog.component';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  // styleUrls: ['./checklist.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AlertService]
})
export class ChecklistComponent implements OnInit {

  constructor(public dialog: MatDialog, private alertService: AlertService) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  deleteUser(elementValues){
    console.log(elementValues);
    }
    name:any;
  ngOnInit() {
  }

  tableList: Object[] = [
    { intlistId: 1,name: 'Qualification criteria 1', count:4},
    { intlistId:2,name:'Qualification criteria 2', count:5}
  ];

  public openUserDialog(id) {
    let dialogRef = this.dialog.open(AddCheckListDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  deleteLookup() {
    this.alertService.createAlert('Successfully deleted.', 1);
  }

}
