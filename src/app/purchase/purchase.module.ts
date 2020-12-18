import { TendersComponent } from './tenders/tenders.component';
import { RecordsComponent } from './records/records.component';
import { OrdersComponent } from './orders/orders.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './purchase.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';

export const routes = [
  { path: '', redirectTo:'orders', pathMatch: 'full'},
  { path: 'orders', loadChildren: './orders/orders.module#OrdersModule',component:OrdersComponent, data: { breadcrumb: 'Orders' } },
  { path: 'records', loadChildren: './records/records.module#RecordsModule',component:RecordsComponent, data: { breadcrumb: 'Records' } },
  { path: 'tenders', loadChildren: './tenders/tenders.module#TendersModule',component:TendersComponent, data: { breadcrumb: 'Tenders' } },
  // { path: 'permissions', component: PermissionsComponent, pathMatch: 'full', data: { brdeadcrumb: 'Permissions' }}
];

@NgModule({
  declarations: [PurchaseComponent,OrdersComponent,TendersComponent,RecordsComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
})
export class PurchaseModule { }
