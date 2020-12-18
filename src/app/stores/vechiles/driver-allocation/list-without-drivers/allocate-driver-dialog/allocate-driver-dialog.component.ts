import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-allocate-driver-dialog',
  templateUrl: './allocate-driver-dialog.component.html',
  styleUrls: ['./allocate-driver-dialog.component.scss']
})
export class AllocateDriverDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AllocateDriverDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
