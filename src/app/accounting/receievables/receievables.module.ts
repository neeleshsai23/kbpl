import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceievablesComponent } from './receievables.component';
import { PaymentsComponent } from './payments/payments.component';
import { RentalsComponent } from './rentals/rentals.component';
import { DailyIncomeComponent } from './daily-income/daily-income.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';

export const routes = [
  { path: '', redirectTo:"daily-income", pathMatch: 'full'},
  { path: 'daily-income', component:DailyIncomeComponent, data: { breadcrumb: 'Projects' } },
  { path: 'payments', component:PaymentsComponent, data: { breadcrumb: 'Projects' } },
  { path: 'rentals', component:RentalsComponent, data: { breadcrumb: 'Projects' } }
];

@NgModule({
  declarations: [PaymentsComponent, RentalsComponent, DailyIncomeComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
})
export class ReceievablesModule { }
