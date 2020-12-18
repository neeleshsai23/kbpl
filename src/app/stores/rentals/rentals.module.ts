import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalsComponent } from './rentals.component';
import { TermsWoComponent } from './terms-wo/terms-wo.component';
import { RentCalculationsComponent } from './rent-calculations/rent-calculations.component';
import { RentalMaintenanceComponent } from './rental-maintenance/rental-maintenance.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { FuelEfficiencyComponent } from './fuel-efficiency/fuel-efficiency.component';
import { ReturnsComponent } from './returns/returns.component';


export const routes = [
  { path: '',redirectTo:'fuel-efficiency',pathMatch: 'full'},
  { path: 'fuel-efficiency',component:FuelEfficiencyComponent},
  { path: 'productivity',component:ProductivityComponent},
  { path: 'rent-calculations',component:RentCalculationsComponent},
  { path: 'rental-maintenance',component:RentalMaintenanceComponent},
  { path: 'returns',component:ReturnsComponent},
  { path: 'terms-wo',component:TermsWoComponent},

]

@NgModule({
  declarations: [ TermsWoComponent, RentCalculationsComponent, RentalMaintenanceComponent, ProductivityComponent, FuelEfficiencyComponent, ReturnsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class RentalsModule { }
