import { ProjectWiseDetailsComponent } from './project-wise-details/project-wise-details.component';
import { HiringComponent } from './hiring/hiring.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrComponent } from './hr.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

export const routes = [
  { path: '', redirectTo:'ERM', pathMatch: 'full'},
  { path: 'employee-details', loadChildren: './employee-details/employee-details.module#EmployeeDetailsModule',component:EmployeeDetailsComponent, data: { breadcrumb: 'Projects' } },
  { path: 'ERM',Component:EmployeeProfileComponent, data: { breadcrumb: 'Projects' } },
  { path: 'hiring', loadChildren: './hiring/hiring.module#HiringModule',component:HiringComponent ,data: { breadcrumb: 'Projects' } },
  { path: 'project-wise-details', loadChildren: './project-wise-details/project-wise-details.module#ProjectWiseDetailsModule',component:ProjectWiseDetailsComponent, data: { breadcrumb: 'Projects' } },
  // { path: 'permissions', component: PermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Permissions' }}
];

@NgModule({
  declarations: [HrComponent, EmployeeProfileComponent,HiringComponent,EmployeeDetailsComponent,ProjectWiseDetailsComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
})
export class HrModule { }
