import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TendersComponent } from './tenders.component';
import { BidManagementComponent } from './bid-management/bid-management.component';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RFBComponent } from './rfb/rfb.component';
import { AddrfbComponent } from './rfb/addrfb/addrfb.component';


export const routes = [
  { path: '',redirectTo:'bid-management',pathMatch: 'full', data: { breadcrumb: 'Bid Management' } },
  { path: 'bid-management',component:BidManagementComponent, data: { breadcrumb: 'Bid Management' } },
  { path: 'rfb',component:RFBComponent, data: { breadcrumb: 'Bid Management' } },
]

@NgModule({
  declarations: [BidManagementComponent, RFBComponent, AddrfbComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule,FormsModule, ReactiveFormsModule 
  ],
  schemas:  [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[AddrfbComponent]
})
export class TendersModule { }
