import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity/activity.component';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DndModule } from 'ngx-drag-drop';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from 'primeng/primeng';
import { OverviewComponent } from './overview/overview.component';
import { SitevisitsComponent } from './sitevisits/sitevisits.component';
import { SitevisitdialogComponent } from './sitevisits/sitevisitdialog/sitevisitdialog.component';
import { SitevisitadddocComponent } from './sitevisits/sitevisitadddoc/sitevisitadddoc.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { ServicesComponent } from './services/services.component';
import { ConceptComponent } from './concept/concept.component';
import { ConceptdialogComponent } from './concept/conceptdialog/conceptdialog.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TenderComponent } from './tender/tender.component';
import { DesignComponent } from './design/design.component';
import { DesigndialogComponent } from './design/designdialog/designdialog.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { DrawingdialogComponent } from './drawings/drawingdialog/drawingdialog.component';
import { ClosureComponent } from './closure/closure.component';
import { QualityDialogComponent } from './closure/quality-dialog/quality-dialog.component';
import { TestrecordDialogComponent } from './closure/testrecord-dialog/testrecord-dialog.component';
import { ConstructionComponent } from './construction/construction.component';
import { BudgetComponent } from './budget/budget.component';
import { AddsiteDialogComponent } from './budget/addsite-dialog/addsite-dialog.component';
import { MetricsComponent } from './metrics/metrics.component';
import { AddNotesInDesignComponent } from './design/add-notes-in-design/add-notes-in-design.component';
import { AddFactoryComponent } from './sitevisits/add-factory/add-factory.component';
import { AddFactoryModuleComponent } from './sitevisits/add-factory-module/add-factory-module.component';
import { AddFactoryModuleTaskComponent } from './sitevisits/add-factory-module-task/add-factory-module-task.component';
import { AddActionItemComponent } from './drawings/add-action-item/add-action-item.component';
import { AddActionIteComponent } from './drawings/add-action-ite/add-action-ite.component';
import { AppendLinedialogComponent } from './schedule/append-linedialog/append-linedialog.component';
import { AddDocInServiceComponent } from './services/add-doc-in-service/add-doc-in-service.component';
import { AddVersionDoicComponent } from './services/add-version-doic/add-version-doic.component';
import { DriveurldialogComponent } from './construction/driveurldialog/driveurldialog.component';
import { GanttModule, ResizeService, SortService, FilterService, SelectionService, ReorderService,
  EditService, DayMarkersService, ToolbarService } from '@syncfusion/ej2-angular-gantt';
import { GhantComponent } from './ghant/ghant.component';
import { AddPreviousComponent } from './services/add-previous/add-previous.component';


export const routes = [ 
  { path: '', redirectTo:"activity", pathMatch:'full' },
  { path: 'activity', component: ActivityComponent, data: { breadcrumb: 'Activity' } },
  { path: 'overview', component: OverviewComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'stagegateprocess', component: SitevisitsComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'otherdocs', component: ServicesComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'ganttchart', component: ConceptComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'fat', component: ScheduleComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'tender', component: TenderComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'linetrials', component: DesignComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'capa', component: DrawingsComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'specs', component: ClosureComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'artwork', component: ConstructionComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'budget', component: BudgetComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'metrics', component: MetricsComponent, data: { breadcrumb: 'Project Dashboard' } },
]

@NgModule({
  declarations: [ActivityComponent, OverviewComponent, SitevisitsComponent, SitevisitdialogComponent, SitevisitadddocComponent, ServicesComponent, ConceptComponent,ConceptdialogComponent, ScheduleComponent, TenderComponent, DesignComponent, DesigndialogComponent, DrawingsComponent, DrawingdialogComponent, ClosureComponent,QualityDialogComponent,TestrecordDialogComponent, ConstructionComponent, BudgetComponent, AddsiteDialogComponent, MetricsComponent, AddNotesInDesignComponent, AddFactoryComponent, AddFactoryModuleComponent, AddFactoryModuleTaskComponent, AddActionItemComponent, AddActionIteComponent, AppendLinedialogComponent, AddDocInServiceComponent, AddVersionDoicComponent, DriveurldialogComponent, GhantComponent, AddPreviousComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),GanttModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,DndModule,DragDropModule,MglTimelineModule
  ],
  providers: [ ResizeService, SortService, FilterService, SelectionService, ReorderService,
    EditService, DayMarkersService, ToolbarService],
  entryComponents: [AddPreviousComponent,DriveurldialogComponent,AddVersionDoicComponent,AddDocInServiceComponent,AppendLinedialogComponent,AddActionItemComponent,AddFactoryModuleTaskComponent,AddFactoryModuleComponent,AddFactoryComponent,AddNotesInDesignComponent,DeleteConfirmDialogComponent,SitevisitdialogComponent,SitevisitadddocComponent,ConceptdialogComponent,DesigndialogComponent,DrawingdialogComponent,QualityDialogComponent,TestrecordDialogComponent,AddsiteDialogComponent]
})
export class ProjectDashboardModule { }
