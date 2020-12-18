import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DragulaService } from 'ng2-dragula';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTableModule } from 'primeng/primeng';
// import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddColorcodeDialogComponent } from './add-colorcode-dialog/add-colorcode-dialog.component';
import { ResearchComponent } from './research/research.component';

export const routes = [
  { path: '', redirectTo: 'conversations', pathMatch: 'full' },  
  { path: 'conversations', component: ResearchComponent, data: { breadcrumb: 'Color Codes' } },
  { path: 'projectbrief', component: ResearchComponent, data: { breadcrumb: 'Color Codes' } },
  { path: 'samples', component: ResearchComponent, data: { breadcrumb: 'Color Codes' } },
  { path: 'feedback', component: ResearchComponent, data: { breadcrumb: 'Color Codes' } },
  { path: 'tracking', component: ResearchComponent, data: { breadcrumb: 'Color Codes' } },
  { path: 'conversion', component: ResearchComponent, data: { breadcrumb: 'Color Codes' } },
  { path: 'cultivation', component: ResearchComponent, data: { breadcrumb: 'Color Codes' } },
];


@NgModule({
  declarations: [
    AddColorcodeDialogComponent,
  ResearchComponent],
  imports: [
    CommonModule,
    ModalModule,
    SharedModule,
    SharedModule,
    ConfirmationPopoverModule,
    RouterModule.forChild(routes),
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ],
  providers: [DragulaService],
  entryComponents: [
    AddColorcodeDialogComponent]
})
export class ColorcodeModule { }
