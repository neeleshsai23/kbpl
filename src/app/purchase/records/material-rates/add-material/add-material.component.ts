import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.scss']
})
export class AddMaterialComponent implements OnInit {

  addMaterialForm:FormGroup;
  materialUnitsDop:any;
  purchaseUnitsDop:any
  lastMaterialCode:any;
  materialTypesInTSFile = [{id:1 , value:"Consumable Item"} , {id:2 , value:"Returnable Item"}];
  materialUnitsInTsFile = [{id:1 , value:"Sq.MT"} , {id:2 , value:"RMT"}]

  constructor(public dialogRef: MatDialogRef<AddMaterialComponent>,@Inject(MAT_DIALOG_DATA) public client: any, private alertService: AlertService, private fb:FormBuilder) {
    this.createClientForm();
  }
  
  ngOnInit() {
  }

 

  
  get addMaterialName() { return this.addMaterialForm.get('addMaterialName'); }
  
  get materialCode() { return this.addMaterialForm.get('materialCode'); }

  get purchaseUnits() { return this.addMaterialForm.get('purchaseUnits'); }

  
  createClientForm() {
    this.addMaterialForm=this.fb.group({
      addMaterialName: new FormControl('',[Validators.required,this.noWhiteSpaceValidator]),
      materialCode: new FormControl(''),
      purchaseUnits:new FormControl('', [Validators.required]),
    });
  }
  
  saveClient() {
    let finalObj = {};
    finalObj['material_name'] = this.addMaterialForm.value.addMaterialName;
    finalObj['material_type'] = this.addMaterialForm.value.materialType;
    finalObj['material_unit_id'] = this.addMaterialForm.value.materialUnits;
    finalObj['unit_master_id'] = this.addMaterialForm.value.purchaseUnits;
    finalObj['special_value'] = this.addMaterialForm.value.specialValue;
    finalObj['special_factor_calculation_method'] = this.addMaterialForm.value.factor;
    // tempObj['project_detail'] = this.addMaterialForm.value.projectdetail;
    if(this.lastMaterialCode) {
      let strI = this.lastMaterialCode.material_code.split("-");
      let code = parseInt(strI[1]);
      let inc = code + 1;
      let strCon = inc.toString();
      let finalLength = strCon.length;
      let addZeros = 5-finalLength;
      if(addZeros == 0) {
        finalObj['material_code'] = "MGC-"+strCon;
      }
      if(addZeros == 1) {
        finalObj['material_code'] = "MGC-0"+strCon;
      }
      if(addZeros == 2) {
        finalObj['material_code'] = "MGC-00"+strCon;
      }
      if(addZeros == 3) {
        finalObj['material_code'] = "MGC-000"+strCon;
      }
      if(addZeros == 4) {
        finalObj['material_code'] = "MGC-0000"+strCon;
      }
    }
    else {
      finalObj['material_code'] = "MGC-00001";
    }
    this.dialogRef.close('save');
  }
  
  enterOnlyNumbers(event) {
    var k;
    k=event.charCode;
    return ((k > 47 && k < 58) || k == 8 || k == 46)
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
