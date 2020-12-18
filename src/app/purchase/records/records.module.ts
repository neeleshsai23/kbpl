
import { AddcategoryComponent } from './category-master/addcategory/addcategory.component';
import { AddLabComponent } from './lab-master/add-lab/add-lab.component';
import { LabMasterComponent } from './lab-master/lab-master.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsComponent } from './records.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { MaterialRatesComponent } from './material-rates/material-rates.component';
import { AddVendorComponent } from './vendor-list/add-vendor/add-vendor.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { AddMaterialComponent } from './material-rates/add-material/add-material.component';
import { CategoryMasterComponent } from './category-master/category-master.component';
import { ItemratesMasterComponent } from './itemrates-master/itemrates-master.component';
import { ServiceMasterComponent } from './service-master/service-master.component';
import { ItemsComponent } from './category-master/items/items.component';
import { AddComponent } from './itemrates-master/add/add.component';

import { RatesDialogComponent } from './itemrates-master/rates-dialog/rates-dialog.component';
import { AddserviceComponent } from './service-master/addservice/addservice.component';
import { ServiceDialogComponent } from './service-master/service-dialog/service-dialog.component';



export const routes = [
  { path: '',redirectTo:'vendor-master',pathMatch: 'full', data: { breadcrumb: 'Records' } },
  { path: 'vendor-master',component:MaterialRatesComponent, data: { breadcrumb: 'Records' } },
  { path: 'subcontractor-master',component:VendorListComponent, data: { breadcrumb: 'Records' } },
  { path: 'lab-master',component:LabMasterComponent, data: { breadcrumb: 'Records' } },
  { path: 'category-master',component:CategoryMasterComponent, data: { breadcrumb: 'Records' } },
  { path: 'itemsrates-master',component:ItemratesMasterComponent, data: { breadcrumb: 'Records' } },
  { path: 'service-master',component:ServiceMasterComponent, data: { breadcrumb: 'Records' } },
]

@NgModule({
  declarations: [ VendorListComponent, MaterialRatesComponent,AddLabComponent,LabMasterComponent, AddVendorComponent, AddMaterialComponent, CategoryMasterComponent, ItemratesMasterComponent, ServiceMasterComponent, AddLabComponent, AddcategoryComponent, ItemsComponent, AddComponent, RatesDialogComponent, AddserviceComponent, ServiceDialogComponent],
  imports: [
    ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  entryComponents:[AddVendorComponent,AddMaterialComponent,AddLabComponent,AddserviceComponent,ServiceDialogComponent,ItemsComponent,RatesDialogComponent,AddcategoryComponent,AddComponent]
})
export class RecordsModule { }
