import { GrnComponent } from './grn/grn.component';
import { RfqComponent } from './rfq/rfq.component';
import { AgeingComponent } from './ageing/ageing.component';
import { PayablesComponent } from './payables/payables.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { QuotationsComponent } from './quotations/quotations.component';
import { PoComponent } from './po/po.component';
import { TrackingComponent } from './tracking/tracking.component';
import { BillsReceivablesComponent } from './bills-receivables/bills-receivables.component';
import { WoComponent } from './wo/wo.component';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { GeneratepoComponent } from './po/generatepo/generatepo.component';
import { ShowposComponent } from './po/showpos/showpos.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { AddRequisitionComponent } from './requisition/add-requisition/add-requisition.component';
import { AddReqitemComponent } from './requisition/add-reqitem/add-reqitem.component';
import { AddPayableComponent } from './payables/add-payable/add-payable.component';
import { AddrfqComponent } from './rfq/addrfq/addrfq.component';
import { ItemsrfqComponent } from './rfq/itemsrfq/itemsrfq.component';
import { AddwoComponent } from './wo/addwo/addwo.component';
import { AddChallanComponent } from './tracking/add-challan/add-challan.component';
import { ShowReqitemComponent } from './requisition/show-reqitem/show-reqitem.component';

export const routes = [
  { path: '',redirectTo:'requisitions',pathMatch: 'full'},
  { path: 'requisitions',component:RequisitionComponent, data: { breadcrumb: 'Orders' } },
  { path: 'rfq',component:RfqComponent, data: { breadcrumb: 'Orders' } },
  { path: 'requisitions/add-requisition',component:AddRequisitionComponent, data: { breadcrumb: 'Orders' } },
  { path: 'payables',component:PayablesComponent, data: { breadcrumb: 'PO' } },
  { path: 'ageing-analysis',component:AgeingComponent, data: { breadcrumb: 'Orders' } },
  { path: 'consignments',component:BillsReceivablesComponent , data: { breadcrumb: 'Orders' } },
  { path: 'po',component:PoComponent , data: { breadcrumb: 'Orders' } },
  { path: 'po/pos',component:ShowposComponent , data: { breadcrumb: 'Orders' } },
  { path: 'quotations',component:QuotationsComponent , data: { breadcrumb: 'Orders' } },
  { path: 'service-challan',component:TrackingComponent , data: { breadcrumb: 'Orders' } },
  { path: 'wo',component:WoComponent , data: { breadcrumb: 'Orders' } },
  { path: 'grn',component:GrnComponent , data: { breadcrumb: 'Orders' } },

]

@NgModule({
  declarations: [QuotationsComponent,GrnComponent, PoComponent, PayablesComponent,TrackingComponent,AgeingComponent,RfqComponent,BillsReceivablesComponent, WoComponent, GeneratepoComponent, ShowposComponent, RequisitionComponent, AddRequisitionComponent, AddReqitemComponent, AddPayableComponent, AddChallanComponent, AddrfqComponent, ItemsrfqComponent, AddwoComponent, ShowReqitemComponent],
  imports: [
    ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers:[AlertService],
  entryComponents:[GeneratepoComponent,AddReqitemComponent,AddPayableComponent,AddChallanComponent,ItemsrfqComponent,AddrfqComponent,AddwoComponent,ShowReqitemComponent]
})
export class OrdersModule { }
