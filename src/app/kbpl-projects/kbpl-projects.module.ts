import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AlertService } from 'src/app/shared/services/alert.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddProjectDialogComponent } from './add-project-dialog/add-project-dialog.component';
import { GridColumnsProjectsDialogComponent } from './grid-columns-projects-dialog/grid-columns-projects-dialog.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { KbplProjectsComponent } from './kbpl-projects.component';
import { ContractsDialogComponent } from './contracts-dialog/contracts-dialog.component';
import { ProjectsGridviewComponent } from './projects-gridview/projects-gridview.component';
import { ProjectsMapviewComponent } from './projects-mapview/projects-mapview.component';
import { ProjectsKanbanviewComponent } from './projects-kanbanview/projects-kanbanview.component';
import { DndModule } from 'ngx-drag-drop';
import { DragDropModule } from 'primeng/primeng';
import { MglTimelineModule } from 'angular-mgl-timeline';

export const routes = [
  {path:'',redirectTo:'gridview',pathMatch:'full'},
  {path:'gridview',component:ProjectsGridviewComponent},
  {path:'mapview',component:ProjectsMapviewComponent},
  {path:'kanbanview',component:ProjectsKanbanviewComponent},
  {path:'project-dashboard',component:ProjectDashboardComponent,loadChildren:'./project-dashboard/kbpl-project-dashboard.module#KBPLProjectDashboardModule',data:{breadcrumb:'Project Dashboard'}}
];

@NgModule({
  declarations:[ KbplProjectsComponent,ProjectDashboardComponent,AddProjectDialogComponent,GridColumnsProjectsDialogComponent, ContractsDialogComponent, ProjectsGridviewComponent, ProjectsMapviewComponent, ProjectsKanbanviewComponent] ,
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,AgmCoreModule, AgmJsMarkerClustererModule,
    DndModule,DragDropModule,MglTimelineModule
  ],

  providers: [AlertService],
  entryComponents:[AddProjectDialogComponent,GridColumnsProjectsDialogComponent,ContractsDialogComponent]
})
export class KBPLProjectsModule { }
