import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterdataComponent } from './masterdata.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { IndustryMasterComponent } from './industry-master/industry-master.component';
import { LocationMasterComponent } from './location-master/location-master.component';
import { FatMasterComponent } from './fat-master/fat-master.component';
import { DocTypesMasterComponent } from './doc-types-master/doc-types-master.component';
import { AddDocxComponent } from './doc-types-master/add-docx/add-docx.component';
import { AddFatComponent } from './fat-master/add-fat/add-fat.component';
import { AddIndustryComponent } from './industry-master/add-industry/add-industry.component';
import { AddLocationComponent } from './location-master/add-location/add-location.component';
import { LocationComponent } from './location/location.component';
import { ColorCodesComponent } from './color-codes/color-codes.component';
import { EntitiesComponent } from './entities/entities.component';
import { AddEntityComponent } from './entities/add-entity/add-entity.component';
import { AddColorComponent } from './color-codes/add-color/add-color.component';
import { AddLocaComponent } from './location/add-loca/add-loca.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryDialogComponent } from './categories/add-category-dialog/add-category-dialog.component';

export const routes = [
  { path: '', redirectTo: 'industry', pathMatch: 'full' },
  { path: 'industry', component: IndustryMasterComponent, data: { breadcrumb: 'Manage-Kanban' } },
  { path: 'location', component: LocationMasterComponent, data: { breadcrumb: 'Manage-Kanban' } },
  { path: 'fat', component: FatMasterComponent, data: { breadcrumb: 'Manage-Kanban' } },
  { path: 'doctype', component: DocTypesMasterComponent, data: { breadcrumb: 'Manage-Kanban' } },
  { path: 'loca', component: LocationComponent, data: { breadcrumb: 'Manage-Kanban' } },
  { path: 'entity', component: EntitiesComponent, data: { breadcrumb: 'Manage-Kanban' } },
  { path: 'color', component: ColorCodesComponent, data: { breadcrumb: 'Manage-Kanban' } },
  { path:'categories', component:CategoriesComponent}
];

@NgModule({
  declarations: [MasterdataComponent, IndustryMasterComponent, LocationMasterComponent, FatMasterComponent, DocTypesMasterComponent, AddDocxComponent, AddFatComponent, AddIndustryComponent, AddLocationComponent, LocationComponent, ColorCodesComponent, EntitiesComponent, AddEntityComponent, AddColorComponent, AddLocaComponent, CategoriesComponent, AddCategoryDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,ConfirmationPopoverModule
  ],
  entryComponents:[AddEntityComponent,AddColorComponent,AddLocaComponent,AddDocxComponent,AddFatComponent,AddIndustryComponent,AddLocationComponent,AddCategoryDialogComponent]
})
export class MasterdataModule { }
