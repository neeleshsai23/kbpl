import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-add-debit-note',
  templateUrl: './add-debit-note.component.html',
  styleUrls: ['./add-debit-note.component.scss']
})
export class AddDebitNoteComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<AddDebitNoteComponent>) { }

  ngOnInit() {
  }
  
  close(){
    this.dialogRef.close();
  }


}