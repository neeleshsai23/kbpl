import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayableComponent } from './payable.component';
import { DaybookFormComponent } from './daybook-form/daybook-form.component';
import { BankPaymentsFormComponent } from './bank-payments-form/bank-payments-form.component';
import { AdminExpencesOrIncomeComponent } from './admin-expences-or-income/admin-expences-or-income.component';
import { RecurringPaymentsComponent } from './recurring-payments/recurring-payments.component';
import { FixedAssetsComponent } from './fixed-assets/fixed-assets.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';

export const routes = [
  { path: '', redirectTo:"admin-expences", pathMatch: 'full'},
  { path: 'admin-expences', component:AdminExpencesOrIncomeComponent, data: { breadcrumb: 'Projects' } },
  { path: 'bank-payments-form', component:BankPaymentsFormComponent, data: { breadcrumb: 'Projects' } },
  { path: 'daybook-form', component:DaybookFormComponent, data: { breadcrumb: 'Projects' } },
  { path: 'fixed-assets', component:FixedAssetsComponent, data: { breadcrumb: 'Projects' } },
  { path: 'recurring-payments', component:RecurringPaymentsComponent, data: { breadcrumb: 'Projects' } }
];

@NgModule({
  declarations: [DaybookFormComponent, BankPaymentsFormComponent, AdminExpencesOrIncomeComponent, RecurringPaymentsComponent, FixedAssetsComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
})
export class PayableModule { }
