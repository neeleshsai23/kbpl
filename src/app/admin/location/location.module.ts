import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AddLocationDialogComponent } from './add-location-dialog/add-location-dialog.component';

export const routes = [
  {path:'', component: CountryComponent, pathMatch:'full'},
  {path:'countries', component: CountryComponent, pathMatch:'full'},
  {path:'countries/:countryId', component: StateComponent, pathMatch:'full'},
  {path:'countries/:countryId/:stateId', component: CityComponent, pathMatch:'full'}
];

@NgModule({
  declarations: [
    LocationComponent,
    CountryComponent,
    StateComponent,
    CityComponent,
    AddLocationDialogComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PipesModule,
    NgxPaginationModule,
    RouterModule.forChild(routes),HttpClientModule,
    ConfirmationPopoverModule
  ],
  entryComponents: [AddLocationDialogComponent]
})
export class LocationModule { }
