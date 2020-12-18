import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankComponent } from './bank.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ReconciliationComponent } from './reconciliation/reconciliation.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';

export const routes = [
  { path: '', redirectTo:"bank-accounts", pathMatch: 'full'},
  { path: 'bank-accounts', component:BankAccountsComponent, data: { breadcrumb: 'Projects' } },
  { path: 'documentation', component:DocumentationComponent, data: { breadcrumb: 'Projects' } },
  { path: 'loan-details', component:LoanDetailsComponent, data: { breadcrumb: 'Projects' } },
  { path: 'reconciliation', component:ReconciliationComponent, data: { breadcrumb: 'Projects' } },
];

@NgModule({
  declarations: [LoanDetailsComponent, BankAccountsComponent, DocumentationComponent, ReconciliationComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
})
export class BankModule { }
