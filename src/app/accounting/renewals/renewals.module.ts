import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenewalsComponent } from './renewals.component';
import { BankGuarenteeComponent } from './bank-guarentee/bank-guarentee.component';
import { FixedDepositsComponent } from './fixed-deposits/fixed-deposits.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AdditionalFormsComponent } from './additional-forms/additional-forms.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';

export const routes = [
  { path: '', redirectTo:"additional-forms", pathMatch: 'full'},
  { path: 'additional-forms', component:AdditionalFormsComponent, data: { breadcrumb: 'Projects' } },
  { path: 'bank-guarentee', component:BankGuarenteeComponent, data: { breadcrumb: 'Projects' } },
  { path: 'fixed-deposits', component:FixedDepositsComponent, data: { breadcrumb: 'Projects' } },
  { path: 'insurance', component:InsuranceComponent, data: { breadcrumb: 'Projects' } }
];

@NgModule({
  declarations: [BankGuarenteeComponent, FixedDepositsComponent, InsuranceComponent, AdditionalFormsComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
})
export class RenewalsModule { }
