
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDashboardComponent } from './project-dashboard.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { RaBillsComponent } from './ra-bills/ra-bills.component';
import { ContractsComponent } from './contracts/contracts.component';
import { TasksComponent } from './tasks/tasks.component';
import { BudgetComponent } from './budget/budget.component';
import { MisComponent } from './mis/mis.component';
import { BillingComponent } from './billing/billing.component';
import { AddPaymentDialogComponent } from './ra-bills/add-payment-dialog/add-payment-dialog.component';
import { MeasurementBookDialogComponent } from './ra-bills/measurement-book-dialog/measurement-book-dialog.component';
import { AddTaskDialogComponent } from './tasks/add-task-dialog/add-task-dialog.component';



export const routes = [
  {path:'',redirectTo:'analytics',pathMatch:'full'},
  {path:'analytics',component:AnalyticsComponent},
  {path:'ra-bills',component:RaBillsComponent},
  {path:'contracts',component:ContractsComponent},
  {path:'tasks',component:TasksComponent},
  {path:'budget',component:BudgetComponent},
  {path:'mis',component:MisComponent},
  {path:'billing',component:BillingComponent,loadChildren:'./billing/billing.module#KBPLBillingModule'},
]
@NgModule({
  declarations: [AnalyticsComponent, RaBillsComponent, ContractsComponent, TasksComponent, BudgetComponent, MisComponent, BillingComponent, AddPaymentDialogComponent, MeasurementBookDialogComponent, AddTaskDialogComponent],
  imports: [
    ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  entryComponents:[AddPaymentDialogComponent,MeasurementBookDialogComponent, AddTaskDialogComponent]
})
export class KBPLProjectDashboardModule { }
