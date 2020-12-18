import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {

  addVendorForm:FormGroup;
  lastVendorCode:any;
  states: any;
  
  public getVendorLastCode() {
  }
  
  
  constructor(public dialogRef: MatDialogRef<AddVendorComponent>,@Inject(MAT_DIALOG_DATA) public client: any, private alertService: AlertService, private fb:FormBuilder) {
    this.createClientForm();
  }
  
  ngOnInit() {
  }

  public getStates() {
  }
  
  get addVendorName() { return this.addVendorForm.get('addVendorName'); }
  
  get vendorCode() { return this.addVendorForm.get('vendorCode'); }
  
  get vendorAddress() { return this.addVendorForm.get('vendorAddress'); }
  
  createClientForm() {
    this.addVendorForm=this.fb.group({
      addVendorName: new FormControl('',[Validators.required,this.noWhiteSpaceValidator]),
      vendorCode: new FormControl(''),
      vendorAddress:new FormControl('',[Validators.required,this.noWhiteSpaceValidator]),
    });
  }
  
  saveClient() {
    let finalObj = {};
    finalObj['vendor_name'] = this.addVendorForm.value.addVendorName;
    finalObj['vendor_address'] = this.addVendorForm.value.vendorAddress;
    finalObj['vendor_gst'] = this.addVendorForm.value.gst;
    finalObj['state_id'] = this.addVendorForm.value.state;
    finalObj['vendor_bankname'] = this.addVendorForm.value.addBankName;
    finalObj['vendor_bank_acc_number'] = this.addVendorForm.value.bankAcc;
    finalObj['vendor_bank_ifsc'] = this.addVendorForm.value.bankIfsc;
    // finalObj['vendor_mobile'] = this.addVendorForm.value.materialUnits;
    finalObj['vendor_bank_branch'] = this.addVendorForm.value.bankBranch;
    if(this.lastVendorCode) {
      let strI = this.lastVendorCode.vendor_code.split("-");
      let code = parseInt(strI[1]);
      let inc = code + 1;
      let strCon = inc.toString();
      let finalLength = strCon.length;
      let addZeros = 5-finalLength;
      if(addZeros == 0) {
        finalObj['vendor_code'] = "VC-"+strCon;
      }
      if(addZeros == 1) {
        finalObj['vendor_code'] = "VC-0"+strCon;
      }
      if(addZeros == 2) {
        finalObj['vendor_code'] = "VC-00"+strCon;
      }
      if(addZeros == 3) {
        finalObj['vendor_code'] = "VC-000"+strCon;
      }
      if(addZeros == 4) {
        finalObj['vendor_code'] = "VC-0000"+strCon;
      }
    }
    else {
      finalObj['vendor_code'] = "VC-00001";
    }
    if(this.client) {
      finalObj['vendor_id'] = this.client.vendor_id;
      finalObj['vendor_code'] = this.client.vendor_code;
    }
    else {
    }
    this.dialogRef.close('save');
  }
  
  
  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }
  
  close(): void { 
    this.dialogRef.close();
  }
  countryList: Array<any> = [
    { name: 'Telangana', cities: ['Hyderabad', 'Karimnagar', 'Warangal'] },
    { name: 'Karnataka', cities: ['Bangalore','Bidar','Haveri'] },
    { name: 'TamilNadu', cities: ['Chennai','Ooty','Madurai','Salem'] },
    { name: 'AndhraPradesh', cities: ['Vizag','Vijayawada','Kurnool'] },
    
  ];
  cities: Array<any>;
  changeCountry(count) {
    this.cities = this.countryList.find(con => con.name == count).cities;
  }
}
