import { InventoryComponent } from './inventory/inventory.component';
import { ReconciliationsComponent } from './reconciliations/reconciliations.component';
import { FixedAssetsComponent } from './fixed-assets/fixed-assets.component';
import { RentalsComponent } from './rentals/rentals.component';
import { VechilesComponent } from './vechiles/vechiles.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresComponent } from './stores.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';

export const routes = [
  { path: '', redirectTo:'inventory', pathMatch: 'full'},
  { path: 'vechiles', loadChildren: './vechiles/vechiles.module#VechilesModule',component:VechilesComponent, data: { breadcrumb: 'Vehicles' } },
  { path: 'rentals', loadChildren: './rentals/rentals.module#RentalsModule',component:RentalsComponent, data: { breadcrumb: 'Rentals' } },
  { path: 'fixed-assets', loadChildren: './fixed-assets/fixed-assets.module#FixedAssetsModule',component:FixedAssetsComponent, data: { breadcrumb: 'Fixed Assets' } },
  { path: 'reconciliations', loadChildren: './reconciliations/reconciliations.module#ReconciliationsModule',component:ReconciliationsComponent, data: { breadcrumb: 'Reconciliations' } },
  { path: 'inventory', loadChildren: './inventory/inventory.module#InventoryModule',component:InventoryComponent, data: { breadcrumb: 'Inventory' } },





  // { path: 'permissions', component: PermissionsComponent, pathMatch: 'full', data: { breadcrumb: 'Permissions' }}
];

@NgModule({
  declarations: [StoresComponent,VechilesComponent,RentalsComponent,FixedAssetsComponent,ReconciliationsComponent,InventoryComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
})
export class StoresModule { }
