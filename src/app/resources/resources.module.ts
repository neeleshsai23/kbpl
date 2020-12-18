import { MachinaryComponent } from './machinary/machinary.component';
import { PlantsComponent } from './plants/plants.component';
import { ToolsComponent } from './tools/tools.component';
import { RawMaterialsComponent } from './raw-materials/raw-materials.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesComponent } from './resources.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { AddRawmaterialComponent } from './raw-materials/add-rawmaterial/add-rawmaterial.component';
import { AddToolComponent } from './tools/add-tool/add-tool.component';
import { AddPlantComponent } from './plants/add-plant/add-plant.component';
import { AddMachinaryComponent } from './machinary/add-machinary/add-machinary.component';


export const routes = [
  { path: '', redirectTo:"raw-materials", pathMatch: 'full'},
  { path: 'raw-materials', component:RawMaterialsComponent, data: { breadcrumb: 'Resources' } },
  { path: 'tools', component:ToolsComponent, data: { breadcrumb: 'Resources' } },
  { path: 'plants', component:PlantsComponent, data: { breadcrumb: 'Resources' } },
  { path: 'machinary', component:MachinaryComponent, data: { breadcrumb: 'Resources' } },
];

@NgModule({
  declarations: [RawMaterialsComponent,ToolsComponent,PlantsComponent,MachinaryComponent, AddRawmaterialComponent, AddToolComponent, AddPlantComponent, AddMachinaryComponent],
  imports: [
    ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule
  ],
  providers: [AlertService],
  entryComponents:[AddPlantComponent,AddRawmaterialComponent,AddMachinaryComponent,AddToolComponent]
})
export class ResourcesModule { }
