import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AlertService } from '../../shared/services/alert.service';
import { AddColorcodeDialogComponent } from './add-colorcode-dialog/add-colorcode-dialog.component';
import { MatDialog } from '@angular/material';;

@Component({
  selector: 'app-colorcode',
  templateUrl: './colorcode.component.html',
  styleUrls: ['./colorcode.component.scss'],encapsulation: ViewEncapsulation.None,
  providers:[AlertService]
})
export class ColorcodeComponent implements OnInit {

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
    { intLookupId: 1,code: 'Red', options:'Last activity happened more than 21 days'},
    { intLookupId: 2,code: 'Green', options:'Last activity happened within the past 7 days'},
    { intLookupId: 3,code: 'Blue', options:'Last activity happened within the past 8 to 14 days'},
    { intLookupId: 4,code: 'Grey', options:'Last activity happened within the past 15 to 21 days'},
  ];
  
  public openUserDialog(id) {
    let dialogRef = this.dialog.open(AddColorcodeDialogComponent, {
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
