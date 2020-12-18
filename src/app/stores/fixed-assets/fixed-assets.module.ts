import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedAssetsComponent } from './fixed-assets.component';
import { NewAssetComponent } from './new-asset/new-asset.component';
import { DocumentRegisterComponent } from './document-register/document-register.component';
import { SiteTransfersComponent } from './site-transfers/site-transfers.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';


export const routes = [
  { path: '',redirectTo:'document-register',pathMatch: 'full'},
  { path: 'document-register',component:DocumentRegisterComponent},
  { path: 'maintenance',component:MaintenanceComponent},
  { path: 'new-asset',component: NewAssetComponent},
  { path: 'site-transfers',component:SiteTransfersComponent},

]

@NgModule({
  declarations: [ NewAssetComponent, DocumentRegisterComponent, SiteTransfersComponent, MaintenanceComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class FixedAssetsModule { }
