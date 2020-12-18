import { AddDebitNoteComponent } from './sc/add-debit-note/add-debit-note.component';
import { AddAdvanceComponent } from './sc/add-advance/add-advance.component';

import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing.component';
import { ClientRaBillsComponent } from './client-ra-bills/client-ra-bills.component';
import { SubContractorsComponent } from './sub-contractors/sub-contractors.component';
import { TestingComponent } from './testing/testing.component';
import { ReconciliationsComponent } from './reconciliations/reconciliations.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from '../../../shared/services/alert.service';
import { SharedModule } from '../../../shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { SCComponent } from './sc/sc.component';
import { SCRABillsComponent } from './sc-ra-bills/sc-ra-bills.component';
import { MeasurementBookDialogComponent } from './client-ra-bills/measurement-book-dialog/measurement-book-dialog.component';
import { AddPaymentDialogComponent } from './client-ra-bills/add-payment-dialog/add-payment-dialog.component';
//import { ShowDocsComponent } from '../documents-and-drawing/quotations/show-docs/show-docs.component';
import { AddDialogComponent } from './sc-ra-bills/add-dialog/add-dialog.component';
import { ItemsDialogComponent } from './sc-ra-bills/items-dialog/items-dialog.component';
import { ViewParametersDialogComponent } from './testing/view-parameters-dialog/view-parameters-dialog.component';
import { AddTestResultsDialogComponent } from './testing/add-test-results-dialog/add-test-results-dialog.component';
import { ViewItemsDialogComponent } from './reconciliations/view-items-dialog/view-items-dialog.component';
import { AddPhysicalStockDialogComponent } from './reconciliations/add-physical-stock-dialog/add-physical-stock-dialog.component';
import { ShowDocsComponent } from '../../../shared/show-docs/show-docs.component';

export const routes = [
  { path: '', redirectTo:'sc-advances', pathMatch: 'full'},
  { path: 'client-ra-bills', component:ClientRaBillsComponent, data: { breadcrumb: 'Projects' } },
  { path: 'reconciliation', component:ReconciliationsComponent, data: { breadcrumb: 'Projects' } },
  { path: 'sub-contractors', component:SubContractorsComponent, data: { breadcrumb: 'Projects' } },
  { path: 'sc-advances', component:SCComponent, data: { breadcrumb: 'Projects' } },
  { path: 'sc-ra-bills', component:SCRABillsComponent, data: { breadcrumb: 'Projects' } },
  { path: 'testing', component:TestingComponent, data: { breadcrumb: 'Projects' } },
];

@NgModule({
  declarations: [ ClientRaBillsComponent, SubContractorsComponent, TestingComponent, ReconciliationsComponent, SCComponent, SCRABillsComponent, AddDialogComponent, ItemsDialogComponent,AddAdvanceComponent, AddDebitNoteComponent,MeasurementBookDialogComponent, AddPaymentDialogComponent, ViewParametersDialogComponent, AddTestResultsDialogComponent, ViewItemsDialogComponent, AddPhysicalStockDialogComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[ItemsDialogComponent,AddDialogComponent,ShowDocsComponent,AddAdvanceComponent,AddDebitNoteComponent,MeasurementBookDialogComponent,AddPaymentDialogComponent,ViewParametersDialogComponent,AddTestResultsDialogComponent,ViewItemsDialogComponent,AddPhysicalStockDialogComponent]
})

export class KBPLBillingModule { }
