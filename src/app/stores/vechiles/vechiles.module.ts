import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DragDropModule } from 'primeng/primeng';
import { DndModule } from 'ngx-drag-drop';
import { DragulaService } from 'ng2-dragula';
import { VechilesComponent } from './vechiles.component';
import { GpsTrackingComponent } from './gps-tracking/gps-tracking.component';
import { FuelConsumptionComponent } from './fuel-consumption/fuel-consumption.component';
import { DriverAllocationComponent } from './driver-allocation/driver-allocation.component';
import { ServiceRepairsComponent } from './service-repairs/service-repairs.component';
import { WorkRecordsComponent } from './work-records/work-records.component';
import { LimitHistoryDialogComponent } from './fuel-consumption/limit-history-dialog/limit-history-dialog.component';
import { GpsHistoryDialogComponent } from './gps-tracking/gps-history-dialog/gps-history-dialog.component';
import { AddWorkRecordDialogComponent } from './work-records/add-work-record-dialog/add-work-record-dialog.component';
import { WorkHistoryDialogComponent } from './work-records/work-history-dialog/work-history-dialog.component';
import { GenerateRequestDialogComponent } from './service-repairs/generate-request-dialog/generate-request-dialog.component';
import { QuotePreviewDialogComponent } from './service-repairs/quote-preview-dialog/quote-preview-dialog.component';
import { MglTimelineModule } from 'angular-mgl-timeline';


export const routes = [
  { path: '',redirectTo:'driver-allocation',pathMatch: 'full', data: { breadcrumb: 'Projects' } },
  { path: 'driver-allocation',component:DriverAllocationComponent,loadChildren:'./driver-allocation/driver-allocation.module#DriverAllocationModule', data: { breadcrumb: 'Projects' } },
  { path: 'fuel-consumption',component:FuelConsumptionComponent, data: { breadcrumb: 'Projects' } },
  { path: 'gps-tracking',component:GpsTrackingComponent, data: { breadcrumb: 'Projects' } },
  { path: 'service-repairs',component:ServiceRepairsComponent, data: { breadcrumb: 'Projects' } },
  { path: 'work-records',component:WorkRecordsComponent, data: { breadcrumb: 'Projects' } },


]

@NgModule({
  declarations: [ GpsTrackingComponent, FuelConsumptionComponent, DriverAllocationComponent, ServiceRepairsComponent, WorkRecordsComponent, LimitHistoryDialogComponent, GpsHistoryDialogComponent, AddWorkRecordDialogComponent, WorkHistoryDialogComponent, GenerateRequestDialogComponent, QuotePreviewDialogComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,DndModule,DragDropModule,MglTimelineModule
  ],
  entryComponents:[LimitHistoryDialogComponent,GpsHistoryDialogComponent,AddWorkRecordDialogComponent,WorkHistoryDialogComponent,GenerateRequestDialogComponent,QuotePreviewDialogComponent]
})
export class VechilesModule { }
