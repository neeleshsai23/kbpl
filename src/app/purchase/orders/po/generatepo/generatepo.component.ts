import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-generatepo',
  templateUrl: './generatepo.component.html',
  styleUrls: ['./generatepo.component.scss']
})
export class GeneratepoComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  vendors = [{id:1,name:"ACC Limited"},{id:2,name:"Mr pvt ltd"},{id:3,name:"Goyal Foam pvt ltd"},{id:4,name:"OM Traders pvt ltd"},{id:5,name:"Ranjan Traders pvt ltd"}];
  material = [{id:1,matName:"Cetex Lithium Silicate"},{id:2,matName:"ROT Blade"},{id:3,matName:"SIKA Chapdur"},{id:4,matName:"MS Plate dowels 100x150x6mm"},{id:5,matName:"Cetex-Curing Chemical"},{id:6,matName:"6 MM EPE Backer Rod"},{id:7,matName:"Saw Cutting blade (14)"}];
  godowns :any;
  addPOForm:FormGroup;
  jobCodeArryForm: FormArray;
  paymentModes = [{id:1 , value:"Advance"} , {id:2 , value:"Credit"}];
  // purchaseunit = [{id:1 , value:"Kg"} , {id:2 , value:"Roll"} , {id:3 , value:"Nos"}];
  finalDocData = [];
  buyers : any;
  
  get vendor() { return this.addPOForm.get('vendor'); }
  
  get materilaCode() { return this.addPOForm.get('materilaCode'); }
  
  get materialName() { return this.addPOForm.get('materialName'); }
  
  get purchaseUnits() { return this.addPOForm.get('purchaseUnits'); }
  
  get quantity() { return this.addPOForm.get('quantity'); }
  
  get rate() { return this.addPOForm.get('rate'); }
  
  get amount() { return this.addPOForm.get('amount'); }
  
  createPOForm() {
    this.addPOForm = this.fb.group({
      vendor : new FormControl('',[Validators.required]),
      jobCodeDetails : new FormArray([])
    })
  }
  
  createItem(materilaCode,materialName,quantity,rate,amount,purchaseUnits): FormGroup {
    return this.fb.group({
      materilaCode: [materilaCode, [Validators.required]],
      materialName: [materialName, [Validators.required]],
      purchaseUnits: [purchaseUnits, [Validators.required]],
      quantity: [quantity, [Validators.required]],
      rate: [rate, [Validators.required]],
      amount: [amount, [Validators.required]],
    });
  }
  
  addItem(): void {
    this.jobCodeArryForm = this.addPOForm.get('jobCodeDetails') as FormArray;
    this.jobCodeArryForm.push(this.createItem( null,null,null, null,null,null));
  }
  
  removeItem(index) {
    this.jobCodeArryForm.removeAt(index);
  }
  
  GetAmountNow(quantity,rate,position) {
    console.log(quantity);
    this.jobCodeArryForm.at(position).get('amount').setValue(quantity*rate);
  }
  
  getDetailsOfMaterial(MatID,position) {
    this.jobCodeArryForm.at(position).get('materilaCode').setValue("MG-0001");
    this.jobCodeArryForm.at(position).get('purchaseUnits').setValue("Kg");
  }
  
  close(): void {
    this.dialogRef.close();
  }
  
  constructor(private _formBuilder: FormBuilder,public dialogRef : MatDialogRef<GeneratepoComponent>,public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public staff: any,public alertService : AlertService) {
    this.createPOForm();
  }
  
  ngOnInit() {
    this.addItem();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  
  enterOnlyNumbers(event) {
    var k;
    k=event.charCode;
    return ((k > 47 && k < 58) || k == 8 || k == 46)
  }
  
  savePO() {
    let finalObj = {};
    finalObj['project_id'] = this.staff.project_id;
    finalObj['vendor_id'] = this.addPOForm.value.vendor;
    finalObj['buyer'] = this.addPOForm.value.buyer;
    finalObj['payment_mode'] = this.addPOForm.value.paymentMode;
    for(let i in this.addPOForm.value.jobCodeDetails) {
      this.finalDocData.push({
        "materilaCode":this.addPOForm.value.jobCodeDetails[i].materilaCode,
        "purchaseUnits":this.addPOForm.value.jobCodeDetails[i].purchaseUnits,
        "quantity" : this.addPOForm.value.jobCodeDetails[i].quantity,
        "rate" : this.addPOForm.value.jobCodeDetails[i].rate,
        "amount" : this.addPOForm.value.jobCodeDetails[i].amount,
      })
    }
    let amount = 0;
    for(let i = 0 ; i < this.finalDocData.length;i++) {
      amount = amount + this.finalDocData[i].amount;
    }
    finalObj['BulkData'] = this.finalDocData;
    finalObj['amount'] = amount;
    console.log(finalObj);
    this.alertService.createAlert("PO generated successfully",1);
    this.dialogRef.close('save');
  }
  
}
