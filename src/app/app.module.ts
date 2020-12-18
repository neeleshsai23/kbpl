import { ResourcesComponent } from './resources/resources.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './theme/utils/custom-overlay-container';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmJsMarkerClustererModule, ClusterManager } from "@agm/js-marker-clusterer";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { SharedModule } from './shared/shared.module';
import { PipesModule } from './theme/pipes/pipes.module';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppSettings } from './app.settings';

import { SidenavComponent } from './theme/components/sidenav/sidenav.component';
import { VerticalMenuComponent } from './theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import { BreadcrumbComponent } from './theme/components/breadcrumb/breadcrumb.component';
import { FlagsMenuComponent } from './theme/components/flags-menu/flags-menu.component';
import { FullScreenComponent } from './theme/components/fullscreen/fullscreen.component';
import { ApplicationsComponent } from './theme/components/applications/applications.component';
import { MessagesComponent } from './theme/components/messages/messages.component';
import { UserMenuComponent } from './theme/components/user-menu/user-menu.component';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { HashLocationStrategy, LocationStrategy , PathLocationStrategy } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { PasswordDialogComponent } from './theme/components/user-menu/password-dialog/password-dialog.component';
import { ProfileDialogComponent } from './theme/components/user-menu/profile-dialog/profile-dialog.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { LoginService } from './logins/login.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ToasterModule } from 'angular2-toaster';
import {DragDropModule} from 'primeng/dragdrop';
import { TourNgxBootstrapModule } from 'ngx-tour-ngx-bootstrap';
import {TableModule} from 'primeng/table';
import {TooltipModule} from "ngx-tooltip";
import { LoaderService } from './shared/services/loader.service';
import { XHRBackend,HttpModule } from '@angular/http';
import { AlertService } from './shared/services/alert.service';
import { DatePipe } from '@angular/common'
import { DndModule } from 'ngx-drag-drop';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SubscriptionDialogComponent } from './theme/components/user-menu/subscription-dialog/subscription-dialog.component';
import { MessageCenterComponent } from './message-center/message-center.component';
import { HelpDialogComponent } from "./shared/help-dialog/help-dialog.component";
import { ContractorsComponent } from './contractors/contractors.component';
import { KbplProjectsComponent } from './kbpl-projects/kbpl-projects.component';
import { AddContractorDialogComponent } from './contractors/add-contractor-dialog/add-contractor-dialog.component';
import { AddProjectDialogComponent } from './kbpl-projects/add-project-dialog/add-project-dialog.component';
import { GridColumnsProjectsDialogComponent } from './kbpl-projects/grid-columns-projects-dialog/grid-columns-projects-dialog.component';
import { GridColumnsContractorsDialogComponent } from './contractors/grid-columns-contractors-dialog/grid-columns-contractors-dialog.component';
import { ContractsDialogContractorsComponent } from './contractors/contracts-dialog-contractors/contracts-dialog-contractors.component';

// import { NgxStripeModule } from 'ngx-stripe';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true
};

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FormsModule,
    // BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TooltipModule,
    // NgxStripeModule.forRoot('pk_live_R1YQ4FPNkC7xwpQqiszUdqGe00I3R4i4nK'),
    ReactiveFormsModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQDn2o5lkzBI4Sc09UUNiHPtNqlxQTYeA'
    }),
    NgMultiSelectDropDownModule.forRoot(),
    TourNgxBootstrapModule.forRoot(),
    PerfectScrollbarModule,
    ToasterModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    SharedModule,
    PipesModule,
    routing,
    ModalModule.forRoot(),
    HttpModule,
    HttpClientModule,
    MglTimelineModule,
    DragDropModule,
    HttpClientJsonpModule,
    TableModule,
    DndModule,
    NgxChartsModule,
    AgmJsMarkerClustererModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    NotFoundComponent,
    SidenavComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    FlagsMenuComponent,
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    UserMenuComponent,
    PasswordDialogComponent,
    ConfirmDialogComponent,
    ProfileDialogComponent,
    SubscriptionDialogComponent,
    MessageCenterComponent,
    ResourcesComponent,
    ContractorsComponent,
    GridColumnsContractorsDialogComponent,
    AddContractorDialogComponent,
    ContractsDialogContractorsComponent
    
  ],
  entryComponents: [
    HelpDialogComponent,
    VerticalMenuComponent,
    PasswordDialogComponent,
    ConfirmDialogComponent,
    ProfileDialogComponent,
    GridColumnsContractorsDialogComponent,
    AddContractorDialogComponent,
    ContractsDialogContractorsComponent
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy },
    AppSettings,
    LoginService,
    LoaderService,
    AlertService,
    ClusterManager,
    DatePipe,
    GoogleMapsAPIWrapper,
  { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
  { provide: OverlayContainer, useClass: CustomOverlayContainer },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }   

//ng module InMemoryWebApiModule.forFeature(Data, { delay: 500 })