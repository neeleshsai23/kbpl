import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { OrderRequestsComponent } from './order-requests/order-requests.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { ConsignmentsComponent } from './consignments/consignments.component';
import { SiteTransfersComponent } from './site-transfers/site-transfers.component';
import { SiteIssueComponent } from './site-issue/site-issue.component';
import { ConsumptionComponent } from './consumption/consumption.component';
import { DamagesComponent } from './damages/damages.component';
import { ScrapSaleComponent } from './scrap-sale/scrap-sale.component';
import { GatePassComponent } from './gate-pass/gate-pass.component';
import { StockTransferComponent } from './stock-transfer/stock-transfer.component';
import { MatIssueComponent } from './mat-issue/mat-issue.component';
import { OpeningStockComponent } from './opening-stock/opening-stock.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { AddGatepassComponent } from './gate-pass/add-gatepass/add-gatepass.component';
import { AddMatissueComponent } from './mat-issue/add-matissue/add-matissue.component';
import { AddStocktransComponent } from './stock-transfer/add-stocktrans/add-stocktrans.component';
import { GridColumnsOrderRequestsComponent } from './order-requests/grid-columns-order-requests/grid-columns-order-requests.component';
import { RequestOrderDialogComponent } from './order-requests/request-order-dialog/request-order-dialog.component';


export const routes = [
  { path: '',redirectTo:'gate-pass',pathMatch: 'full'},
  { path: 'comparison',component:ComparisonComponent  },
  { path: 'consignments',component:ConsignmentsComponent  },
  { path: 'consumption',component:ConsumptionComponent  },
  { path: 'damages',component: DamagesComponent  },
  { path: 'orders-requests',component:OrderRequestsComponent ,data: { breadcrumb: 'Order Requests' } },
  { path: 'requirements',component:RequirementsComponent  },
  { path: 'scrap-sale',component: ScrapSaleComponent  },
  { path: 'site-issue',component: SiteIssueComponent  },
  { path: 'site-transfers',component:SiteTransfersComponent  },


  { path: 'gate-pass',component:  GatePassComponent  },
  { path: 'stock-transfer',component: StockTransferComponent  },
  { path: 'mat-issue',component: MatIssueComponent  },
  { path: 'opening-stock',component: OpeningStockComponent  },


]

@NgModule({
  declarations: [ RequirementsComponent, OrderRequestsComponent, ComparisonComponent, ConsignmentsComponent, SiteTransfersComponent, SiteIssueComponent, ConsumptionComponent, DamagesComponent, ScrapSaleComponent, GatePassComponent, StockTransferComponent, MatIssueComponent, OpeningStockComponent, AddGatepassComponent, AddMatissueComponent, AddStocktransComponent, GridColumnsOrderRequestsComponent, RequestOrderDialogComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  entryComponents:[AddGatepassComponent,AddMatissueComponent,AddStocktransComponent,GridColumnsOrderRequestsComponent,RequestOrderDialogComponent]
})
export class InventoryModule { }
