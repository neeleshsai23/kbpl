import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SequencesComponent } from './sequences/sequences.component';
import { LookupComponent } from './lookup/lookup.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { PrimeDragulaDirective } from './sequences/prime-dragula.directive';
import { DragulaService } from 'ng2-dragula';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { UsersComponent } from './users/users.component';
import { AddLookupDialogComponent } from './lookup/add-lookup-dialog/add-lookup-dialog.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { AddCheckListDialogComponent } from './checklist/add-checklist-dialog/add-checklist-dialog.component';
import { ColorcodeComponent } from './colorcode/colorcode.component';
// import { TimeZoneComponent } from './timezone/timezone.component';
import { AddColorcodeDialogComponent } from './colorcode/add-colorcode-dialog/add-colorcode-dialog.component';
// import { TimeComponent } from './time/time.component';

export const routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', loadChildren: './users/users.module#UsersModule', data: { breadcrumb: 'Users' }},
  { path: 'lookup', component: LookupComponent, pathMatch: 'full', data: { breadcrumb: 'Lookup' } },
  { path: 'settings', component: SettingsComponent, pathMatch: 'full', data: { breadcrumb: 'Settings' } },
  { path: 'steps', component: SequencesComponent,loadChildren: './sequences/sequences.module#SequencesModule', data: { breadcrumb: 'Manage Kanban for Projects' } },
  { path: 'checklist', component: ChecklistComponent, pathMatch: 'full', data: { breadcrumb: 'Checklist' } },
  { path: 'colorcode',component: ColorcodeComponent,loadChildren: './colorcode/colorcode.module#ColorcodeModule',data: { breadcrumb: 'Color Codes'}},
  // { path: 'colorcode', component:ColorcodeComponent, pathMatch: 'full', data: { breadcrumb: 'Color Code'} },
  { path: 'location', loadChildren: './location/location.module#LocationModule', data: { breadcrumb: 'Locations'} },
  { path: 'masterdata', loadChildren: './masterdata/masterdata.module#MasterdataModule', data: { breadcrumb: 'Master Data'} },
  // { path: 'timezone', component: TimeZoneComponent, pathMatch: 'full', data: { breadcrumb: 'Time Zones' } },
];

@NgModule({
  imports: [
    CommonModule, ModalModule, SharedModule,ConfirmationPopoverModule,
    RouterModule.forChild(routes), DataTableModule,FormsModule,ReactiveFormsModule,TableModule,
    SharedModule
  ], providers: [DragulaService],
  declarations: [SequencesComponent, LookupComponent, SettingsComponent, AddCheckListDialogComponent,AddLookupDialogComponent, ChecklistComponent,ColorcodeComponent],
  entryComponents:[
    AddLookupDialogComponent,
    AddCheckListDialogComponent,
    // AddColorcodeDialogComponent
    
  ]
})
export class AdminModule { }
