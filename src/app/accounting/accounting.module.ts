import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingComponent } from './accounting.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { BankComponent } from './bank/bank.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LedgerComponent } from './ledger/ledger.component';
import { PayableComponent } from './payable/payable.component';
import { ReceievablesComponent } from './receievables/receievables.component';
import { RenewalsComponent } from './renewals/renewals.component';
import { TaxesComponent } from './taxes/taxes.component';

export const routes = [
  { path: '', redirectTo:'bank', pathMatch: 'full'},
  { path: 'bank', loadChildren: './bank/bank.module#BankModule',component:BankComponent},
  { path: 'invoices', loadChildren: './invoices/invoices.module#InvoicesModule',component:InvoicesComponent},
  { path: 'ledger', loadChildren: './ledger/ledger.module#LedgerModule',component:LedgerComponent},
  { path: 'payable', loadChildren: './payable/payable.module#PayableModule',component:PayableComponent},
  { path: 'receivables', loadChildren: './receievables/receievables.module#ReceievablesModule',component:ReceievablesComponent},
  { path: 'renewals', loadChildren: './renewals/renewals.module#RenewalsModule',component:RenewalsComponent},
  { path: 'taxes', loadChildren: './taxes/taxes.module#TaxesModule',component:TaxesComponent},
  // { path: 'permissions', component: PermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Permissions' }}
];

@NgModule({
  declarations: [TaxesComponent,RenewalsComponent,ReceievablesComponent,PayableComponent,LedgerComponent,InvoicesComponent,BankComponent,AccountingComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
})
export class AccountingModule { }
