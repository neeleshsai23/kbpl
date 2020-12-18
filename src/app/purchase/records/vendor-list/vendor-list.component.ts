import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
// import { AddPermissionComponent } from './add-permission/add-permission.component';
import { PageEvent } from '@angular/material';
// import { AdminService } from '../admin.service';
import { AlertService } from '../../../shared/services/alert.service';
// import { CarriersService } from '../../carriers.service';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { FormControl } from '@angular/forms';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
  items=[
    { "Sc_Name" : "HFC","Sc_Code":"HFC/9954","Contact_Person":"Parmeet","Email" : "parmeet@ael.com","Phone" : "8752697882","Address": "Street No-13,Sector 42","City":"Gurugram","State":"Haryana","GSTIN":"GSTIN5782678"},
    { "Sc_Name" : "BHEL","Sc_Code":"BHEL/7267","Contact_Person":"John","Email" : "john@bhel.com","Phone" : "9243868619","Address": "Road No-12","City":"Gandhi nagar","State":"Gujarat","GSTIN":"GSTIN9362682"},
    { "Sc_Name" : "HAL ","Sc_Code":"HAL/9866","Contact_Person":"Karthik","Email" : "karthik@hal.com","Phone" : "6826293682","Address": "8Incline Colony","City":"Bangalore","State":"Karnataka","GSTIN":"GSTIN5628360"},
    { "Sc_Name" : "NTPC","Sc_Code":"NTPC/7075","Contact_Person":"Sainath","Email" : "sainath@ntpc.com","Phone" : "9278268222","Address": "karolbagh area","City":"Hyderabad","State":"Telangana","GSTIN":"GSTIN7253759"},
    { "Sc_Name" : "FCI","Sc_Code":"FCI/7386","Contact_Person":"Jeswin","Email" : "jeswin@fci.com","Phone" : "8267279272","Address": "Street No-1","City":"Gurugram","State":"Haryana","GSTIN":"GSTIN5782678"},
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
  codeControl = new FormControl();
  permissionsDropdown:any;
  public canCreate : any;
  public canDelete : any;
  public canUpdate : any;
  public vendorData = [{vendor_name:"ANR ltd",vendor_code:"VC-0001",vendor_address:"Exhibition Rd, Jabalpur"},{vendor_name:"Visaka Steel Pvt ltd",vendor_code:"VC-0002",vendor_address:"BG 12, Shiva Enclave, Block A-4, Paschim Vihar"},{vendor_name:"GMR inc",vendor_code:"VC-0003",vendor_address:"Adjacent To Axis Bank, Race Course Road, Mumbai"},{vendor_name:"OM Traders",vendor_code:"VC-0004",vendor_address:"	Survey No - 3923/164 Shop No - 01, Shakambari Layout Upkar Solitaire Main Road Manchanahalli Road Attibele Town Anekal Taluk, Attibele"},{vendor_name:"PCC Limited",vendor_code:"VC-0005",vendor_address:"	4095-4096, Inside Ajmere Gate, Main Road, Banglore"},];

  onStepsOptionsSelected(event){
    
  }
  
  constructor(public alertService:AlertService,public dialog: MatDialog) {
  
  }
  
  filterSearch() {
    let filterObj = {};
    if(this.userControl.value) {
      filterObj['vendor_name'] = this.userControl.value;
    }
    if(this.codeControl.value) {
        filterObj['vendor_code'] = this.codeControl.value;
    }
    this.usingObject = filterObj;
    this.getVendors(filterObj);
  }
  
  clearFilters() {
    this.status_filter = '';
    this.userControl.setValue('');
    this.codeControl.setValue('');
    this.usingObject = {}
    this.getVendors({});
  }
  
  ngOnInit() {
  }
  
  public getVendors(filter) {
    filter['per_page'] = this.pageSize;
    filter['page'] = this.currentPage;
  }
  
  public openAdd() {
    let dialogRef = this.dialog.open(AddVendorComponent, {
      
      height: 'auto',
      width: '700px',
      autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {
     
    });
  }

  updateBranch(id,status,value) {
    let finalObj = {};
    finalObj['vendor_id'] = id;
    if(value == 'delete') {
      finalObj['is_deleted'] = status;
    }
    if(value == 'active') {
      finalObj['is_active'] = status;
    }
  }
  
  openDeleteDialog(data) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: data,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
        let finalObj = {};
        finalObj['vendor_id'] = data.vendor_id;
        finalObj['is_deleted'] = 1;
        // // console.log(finalObj);
       
      }
    });
  }
  
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    if(this.usingObject)
    this.getVendors(this.usingObject);
    else 
    this.getVendors({});
  }


}
