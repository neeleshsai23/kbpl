import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesComponent } from './invoices.component';
import { CreationComponent } from './creation/creation.component';
import { TrackingComponent } from './tracking/tracking.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';

export const routes = [
  { path: '', redirectTo:"creation", pathMatch: 'full'},
  { path: 'creation', component:CreationComponent, data: { breadcrumb: 'Projects' } },
  { path: 'tracking', component:TrackingComponent, data: { breadcrumb: 'Projects' } },
];

@NgModule({
  declarations: [CreationComponent, TrackingComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
})
export class InvoicesModule { }
