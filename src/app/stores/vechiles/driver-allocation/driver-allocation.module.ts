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
import { ListWithDriversComponent } from './list-with-drivers/list-with-drivers.component';
import { ListWithoutDriversComponent } from './list-without-drivers/list-without-drivers.component';
import { TrafficViolationsDialogComponent } from './list-with-drivers/traffic-violations-dialog/traffic-violations-dialog.component';
import { ViolationHistoryDialogComponent } from './list-with-drivers/violation-history-dialog/violation-history-dialog.component';
import { AllocateDriverDialogComponent } from './list-without-drivers/allocate-driver-dialog/allocate-driver-dialog.component';
import { MglTimelineModule } from 'angular-mgl-timeline';


export const routes = [
    {path:'',redirectTo:'listwithdrivers',pathMatch:'full'},
    {path:'listwithdrivers',component:ListWithDriversComponent},
    {path:'listwithoutdrivers',component:ListWithoutDriversComponent}
]

@NgModule({
  declarations: [ ListWithDriversComponent, ListWithoutDriversComponent, TrafficViolationsDialogComponent, ViolationHistoryDialogComponent, AllocateDriverDialogComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,DndModule,DragDropModule,MglTimelineModule
  ],
  entryComponents:[TrafficViolationsDialogComponent,ViolationHistoryDialogComponent,AllocateDriverDialogComponent]
})
export class DriverAllocationModule { }
