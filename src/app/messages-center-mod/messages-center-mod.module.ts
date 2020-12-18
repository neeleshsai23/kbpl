import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { MessagesCenterModComponent } from './messages-center-mod.component';
import { ClientsMessageComponent } from './clients-message/clients-message.component';
import { ProjectsMessageComponent } from './projects-message/projects-message.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AlertService } from 'src/app/shared/services/alert.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';


export const routes = [
  { path: '', redirectTo:"client-messages", pathMatch:'full' },
  // { path: '', component: ClientsComponent, pathMatch: 'full', data: { breadcrumb: 'Clients' }},
  { path: 'client-messages', component: ClientsMessageComponent, data: { breadcrumb: "Message Center" } },
  { path: 'project-messages', component: ProjectsMessageComponent, data: { breadcrumb: "Message Center" } },
  // { path: 'permissions', component: PermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Permissions' }}
];


@NgModule({
  declarations: [MessagesCenterModComponent, ClientsMessageComponent, ProjectsMessageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,AgmCoreModule, AgmJsMarkerClustererModule
  ],
  providers: [AlertService],
})
export class MessagesCenterModModule { }
