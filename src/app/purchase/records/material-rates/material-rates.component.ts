import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PageEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddMaterialComponent } from './add-material/add-material.component';

@Component({
  selector: 'app-material-rates',
  templateUrl: './material-rates.component.html',
  styleUrls: ['./material-rates.component.scss']
})
export class MaterialRatesComponent implements OnInit {
  items=[
    { "Vendor_Name" : "FCI","Vendor_Code":"FCI/5620","Contact_Person":"Jeswin","Email" : "jeswin@fci.com","Phone" : "8267279272","Address": "Street No-1","City":"Gurugram","State":"Haryana","GSTIN":"GSTIN5782678"},
    { "Vendor_Name" : "HFC","Vendor_Code":"HFC/8262","Contact_Person":"Parmeet","Email" : "parmeet@ael.com","Phone" : "8752697882","Address": "Street No-13,Sector 42","City":"Gurugram","State":"Haryana","GSTIN":"GSTIN5782678"},
    { "Vendor_Name" : "BHEL","Vendor_Code":"BHEL/7245","Contact_Person":"John","Email" : "john@bhel.com","Phone" : "9243868619","Address": "Road No-12","City":"Gandhi nagar","State":"Gujarat","GSTIN":"GSTIN9362682"},
    { "Vendor_Name" : "HAL ","Vendor_Code":"HAL/9563","Contact_Person":"Karthik","Email" : "karthik@hal.com","Phone" : "6826293682","Address": "8Incline Colony","City":"Bangalore","State":"Karnataka","GSTIN":"GSTIN56283608"},
    { "Vendor_Name" : "NTPC","Vendor_Code":"NTPC/9183","Contact_Person":"Sainath","Email" : "sainath@ntpc.com","Phone" : "9278268222","Address": "karolbagh area","City":"Hyderabad","State":"Telangana","GSTIN":"GSTIN7253759"},
    
    ]
  tableList: any;
  pageEvent: PageEvent;
  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') :'5');
  public currentPage = 0;
  public totalSize = 0;
  public searchText: string;
  // public page: any;
  tableLists: any;
  public permission_filter = "";
  public status_filter = "";
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this role?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  showEmpty: boolean = false;
  materialTypesInTSFile = [{id:1 , value:"Consumable Item"} , {id:2 , value:"Returnable Item"}];
  filterToggle: boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  public dateTime2: Date;
  public usingObject : any;
  public dateTime3: Date;
  status = [{id:1 , value:"Active"} , {id:2 , value:"Inactive"}];
  stepsOptionSelected: any;
  userControl = new FormControl();
  permissionsDropdown:any;
  public canCreate : any;
  public canDelete : any;
  public canUpdate : any;
  public materialData = [{material_name:"Cetex Lithium Silicate",material_code:"MG-0001",unit:"Kg"},{material_name:"Polyvinyl sheet 200 Microns",material_code:"MG-0002",unit:"Nos"},{material_name:"Plate dowels Plastic Sleeve",material_code:"MG-0003",unit:"Kg"},{material_name:"Ideal Joint Classic 125mm Thick",material_code:"MG-0004",unit:"Box"},{material_name:"ROT Blade",material_code:"MG-0005",unit:"Set"}];

  onStepsOptionsSelected(event){

  }


  constructor(public alertService:AlertService,public dialog: MatDialog) {
  }

  filterSearch() {
    let filterObj = {};
    if(this.userControl.value) {
      filterObj['material_name'] = this.userControl.value;
    }
    if(this.status_filter) {
        filterObj['material_type'] = this.status_filter;
    }
    this.usingObject = filterObj;
  }

  clearFilters() {
    this.status_filter = '';
    this.userControl.setValue('');
    this.usingObject = {}
  }

  ngOnInit() {
    this.tableList = [];
    // this.getRoles({});
  }



  public openAdd() {
    let dialogRef = this.dialog.open(AddMaterialComponent, {

      height: 'auto',
      width: '700px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }


}
