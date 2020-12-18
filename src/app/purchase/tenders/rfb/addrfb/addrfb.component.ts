import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-addrfb',
  templateUrl: './addrfb.component.html',
  styleUrls: ['./addrfb.component.scss']
})
export class AddrfbComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  items=[
    { "Select_Category" : "Electrical","Select_Item" : "Switches","Unit" : "Pcs","Quantity" : "4","Remarks" : "Alright"},
    { "Select_Category" : "Plumbing","Select_Item" : "Pipes","Unit" : "Pcs","Quantity" : "12","Remarks" : "Alright"},
    { "Select_Category" : "Civil","Select_Item" : "Cement","Unit" : "Qtls","Quantity" : "7","Remarks" : "Alright"},
    { "Select_Category" : "Furniture","Select_Item" : "Tables","Unit" : "Pcs","Quantity" : "5","Remarks" : "Alright"},
    { "Select_Category" : "Electrical","Select_Item" : "Fans","Unit" : "Pcs","Quantity" : "3","Remarks" : "Alright"},
    ]
   
    constructor(public dialogRef: MatDialogRef<AddrfbComponent>,private _formBuilder: FormBuilder) { 
    
    }
 
   
   ngOnInit() {
     this.firstFormGroup = this._formBuilder.group({
       firstCtrl: ['', Validators.required]
     });
   }
 
   close(): void {
     this.dialogRef.close();
   }
 
   saveStep() {
     this.dialogRef.close();
   }
 
 }
