import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contracts-dialog-contractors',
  templateUrl: './contracts-dialog-contractors.component.html',
  styleUrls: ['./contracts-dialog-contractors.component.scss']
})
export class ContractsDialogContractorsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContractsDialogContractorsComponent>) { }

  ngOnInit() {
  }

  values = [
    {completion:"90%",contractname:"MRC",client:"Robert"},
    {completion:"85%",contractname:"MPK",client:"John"},
    {completion:"70%",contractname:"Beacon",client:"Singh"}
  ]

  close(){
    this.dialogRef.close();
  }

}