import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-quote-preview-dialog',
  templateUrl: './quote-preview-dialog.component.html',
  styleUrls: ['./quote-preview-dialog.component.scss']
})
export class QuotePreviewDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<QuotePreviewDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
