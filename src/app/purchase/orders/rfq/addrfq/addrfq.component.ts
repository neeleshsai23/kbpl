import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addrfq',
  templateUrl: './addrfq.component.html',
  styleUrls: ['./addrfq.component.scss']
})
export class AddrfqComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddrfqComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  saveStep() {
    this.dialogRef.close();
  }
}
