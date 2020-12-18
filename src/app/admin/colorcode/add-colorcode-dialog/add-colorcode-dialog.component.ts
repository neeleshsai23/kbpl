import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service'

@Component({
  selector: 'app-add-colorcode-dialog',
  templateUrl: './add-colorcode-dialog.component.html',
  styleUrls: ['./add-colorcode-dialog.component.scss'],
  providers:[AlertService]
})
export class AddColorcodeDialogComponent implements OnInit {

  colors : Array<any> = [{'code':'green','name':'Green','colorClass':'dot_green'},{'code':'blue','name':'Blue','colorClass':'dot_blue'},{'code':'grey','name':'Grey','colorClass':'dot_grey'},{'code':'red','name':'Red','colorClass':'dot_red'}];
  constructor(public dialogRef: MatDialogRef<AddColorcodeDialogComponent>,@Inject(MAT_DIALOG_DATA) public user: number,
  private alertService: AlertService) { 
    console.log(this.user);
  }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
  saveContact() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
