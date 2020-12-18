import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AlertService } from 'src/app/shared/services/alert.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReconciliationsComponent } from './reconciliations.component';
import { FactorsComponent } from './factors/factors.component';
import { BoqConsumptionComponent } from './boq-consumption/boq-consumption.component';
import { SiteBalancesComponent } from './site-balances/site-balances.component';
import { DprConsumptionComponent } from './dpr-consumption/dpr-consumption.component';
import { SiteChecksComponent } from './site-checks/site-checks.component';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';

export const routes = [
  { path: '',redirectTo:'boq-consumption',pathMatch: 'full' },
  { path: 'boq-consumption',component:BoqConsumptionComponent },

  { path: 'dpr-consumption',component: DprConsumptionComponent },

  { path: 'factors',component:FactorsComponent },
  { path: 'site-balances',component:SiteBalancesComponent },
  { path: 'site-checks',component: SiteChecksComponent },


]



@NgModule({
  declarations: [ FactorsComponent, BoqConsumptionComponent, SiteBalancesComponent, DprConsumptionComponent, SiteChecksComponent, AddItemDialogComponent],
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
  entryComponents:[AddItemDialogComponent]
})
export class ReconciliationsModule { }
