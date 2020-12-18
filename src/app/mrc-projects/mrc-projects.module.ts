
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrcProjectsComponent } from './mrc-projects.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { BillingComponent } from './billing/billing.component';
import { BillOfQuantitiesComponent } from './bill-of-quantities/bill-of-quantities.component';
import { ClosingComponent } from './closing/closing.component';
import { DocumentsAndDrawingComponent } from './documents-and-drawing/documents-and-drawing.component';
import { ProjectPlanningComponent } from './project-planning/project-planning.component';
import { ProjectSiteComponent } from './project-site/project-site.component';
import { MrcAddProjectDialogComponent } from './project-management/mrc-add-project-dialog/mrc-add-project-dialog.component';
import { MrcGridcolumsComponent } from './project-management/mrc-gridcolums/mrc-gridcolums.component';

export const routes = [
  { path: '', redirectTo:'project-management', pathMatch: 'full'},
  {path:"project-management",component:ProjectManagementComponent, data: { breadcrumb: 'Contracts' }},
   
  { path: 'project-dashboard', loadChildren: './project-dashboard/project-dashboard.module#ProjectDashboardModule', data: { breadcrumb: 'Contract Dashboard' } },
 
  // { path: 'permissions', component: PermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Permissions' }}
];

@NgModule({
  declarations: [MrcProjectsComponent,ProjectManagementComponent, MrcAddProjectDialogComponent, MrcGridcolumsComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  entryComponents:[MrcAddProjectDialogComponent,MrcGridcolumsComponent]
})
export class MrcProjectsModule { }
