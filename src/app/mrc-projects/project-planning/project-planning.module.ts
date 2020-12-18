import { AllocationComponent } from './allocation/allocation.component';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPlanningComponent } from './project-planning.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ResourcesComponent } from './resources/resources.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { ProgressComponent } from './progress/progress.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { AddDrawingComponent } from './drawings/add-drawing/add-drawing.component';
import { AddVersionComponent } from './drawings/add-version/add-version.component';
import { PreviousVersionComponent } from './drawings/previous-version/previous-version.component';
import { AddAllocationComponent } from './allocation/add-allocation/add-allocation.component';
import { AddRequisitionComponent } from './procurement/add-requisition/add-requisition.component';
import { ItemsdialogComponent } from './procurement/itemsdialog/itemsdialog.component';
import {AddActivityDialogComponent} from './activities/add-activity-dialog/add-activity-dialog.component';
import {AddLineItemDialogComponent} from './activities/add-line-item-dialog/add-line-item-dialog.component';
import {UpdateDataDialogComponent} from './activities/update-data-dialog/update-data-dialog.component';

export const routes = [
  { path: '', redirectTo:"activities", pathMatch: 'full'},
  { path: 'activities', component:ActivitiesComponent, data: { breadcrumb: 'Projects' } },
  { path: 'allocation', component:AllocationComponent, data: { breadcrumb: 'Projects' } },
  { path: 'drawing', component:DrawingsComponent, data: { breadcrumb: 'Projects' } },
  { path: 'procurement', component:ProcurementComponent, data: { breadcrumb: 'Projects' } },
  { path: 'progress', component:ProgressComponent, data: { breadcrumb: 'Projects' } },
  { path: 'resources', component:ResourcesComponent, data: { breadcrumb: 'Projects' } },
];

@NgModule({
  declarations: [ActivitiesComponent, ResourcesComponent, ProcurementComponent,AllocationComponent, DrawingsComponent, ProgressComponent, AddDrawingComponent, AddVersionComponent, PreviousVersionComponent, AddAllocationComponent, AddRequisitionComponent, ItemsdialogComponent,AddActivityDialogComponent,AddLineItemDialogComponent,UpdateDataDialogComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[AddDrawingComponent,PreviousVersionComponent,AddVersionComponent,AddAllocationComponent,AddRequisitionComponent,ItemsdialogComponent,AddActivityDialogComponent,AddLineItemDialogComponent,UpdateDataDialogComponent]
})
export class ProjectPlanningModule { }
