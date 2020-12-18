import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerComponent } from './ledger.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorSummaryComponent } from './vendor-summary/vendor-summary.component';
import { ContractorsListComponent } from './contractors-list/contractors-list.component';
import { SubHeadsComponent } from './sub-heads/sub-heads.component';
import { ExpencesComponent } from './expences/expences.component';
import { CurrentAssetsComponent } from './current-assets/current-assets.component';
import { CurrentLiabilitiesComponent } from './current-liabilities/current-liabilities.component';
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
  { path: '', redirectTo:"contractors-list", pathMatch: 'full'},
  { path: 'contractors-list', component:ContractorsListComponent, data: { breadcrumb: 'Projects' } },
  { path: 'current-assets', component:CurrentAssetsComponent, data: { breadcrumb: 'Projects' } },
  { path: 'current-liabilities', component:CurrentLiabilitiesComponent, data: { breadcrumb: 'Projects' } },
  { path: 'expences', component:ExpencesComponent, data: { breadcrumb: 'Projects' } },
  { path: 'fixed-assets', component:FixedAssetsComponent, data: { breadcrumb: 'Projects' } },
  { path: 'sub-heads', component:SubHeadsComponent, data: { breadcrumb: 'Projects' } },
  { path: 'vendor-list', component:VendorListComponent, data: { breadcrumb: 'Projects' } },
  { path: 'vendor-summary', component:VendorSummaryComponent, data: { breadcrumb: 'Projects' } }
];

@NgModule({
  declarations: [VendorListComponent, VendorSummaryComponent, ContractorsListComponent, SubHeadsComponent, ExpencesComponent, CurrentAssetsComponent, CurrentLiabilitiesComponent, FixedAssetsComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
})
export class LedgerModule { }
