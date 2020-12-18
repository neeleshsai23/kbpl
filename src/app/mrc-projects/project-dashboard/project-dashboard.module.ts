import { ShowdocsComponent } from './../closing/defect-liability/showdocs/showdocs.component';
import { AnalyticsComponent } from './../analytics/analytics.component';

import { ProjectSiteComponent } from './../project-site/project-site.component';
import { ProjectPlanningComponent } from './../project-planning/project-planning.component';
import { DocumentsAndDrawingComponent } from './../documents-and-drawing/documents-and-drawing.component';
import { ClosingComponent } from './../closing/closing.component';
import { BillOfQuantitiesComponent } from './../bill-of-quantities/bill-of-quantities.component';
import { BillingComponent } from './../billing/billing.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDashboardComponent } from './project-dashboard.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';



export const routes = [
  { path: '', component:ProjectDashboardComponent, pathMatch: 'full'},
  { path: 'billing', loadChildren: './../billing/billing.module#BillingModule',component: BillingComponent,data: { breadcrumb: 'Contract Dashboard' } },
  { path: 'bill-of-quantities', loadChildren: './../bill-of-quantities/bill-of-quantities.module#BillOfQuantitiesModule',component:BillOfQuantitiesComponent, data: { breadcrumb: 'Contract Dashboard' } },
  { path: 'closure', loadChildren: './../closing/closing.module#ClosingModule',component:ClosingComponent, data: { breadcrumb: 'Contract Dashboard' } },
  { path: 'documents-and-drawing', loadChildren: './../documents-and-drawing/documents-and-drawing.module#DocumentsAndDrawingModule',component:DocumentsAndDrawingComponent, data: { breadcrumb: 'Contract Dashboard' } },
  { path: 'project-planning', loadChildren: './../project-planning/project-planning.module#ProjectPlanningModule',component:ProjectPlanningComponent, data: { breadcrumb: 'Contract Dashboard' } },
  { path: 'project-site', loadChildren: './../project-site/project-site.module#ProjectSiteModule',component:ProjectSiteComponent, data: { breadcrumb: 'Contract Dashboard' } },
  { path: 'analytics', loadChildren: './../analytics/analytics.module#AnalyticsModule',component:AnalyticsComponent ,data: { breadcrumb: 'Contract Dashboard' } },
 

]
@NgModule({
  declarations: [ProjectDashboardComponent,BillingComponent,BillOfQuantitiesComponent,ClosingComponent,DocumentsAndDrawingComponent,ProjectPlanningComponent,ProjectSiteComponent,AnalyticsComponent],
  imports: [
    ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
})
export class ProjectDashboardModule { }
