import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SalarySheetComponent } from './salary-sheet/salary-sheet.component';
import { CompanyAssetsComponent } from './company-assets/company-assets.component';
import { CashImpressedComponent } from './cash-impressed/cash-impressed.component';
import { RouterModule } from '@angular/router';



export const routes = [
  { path: '',redirectTo:'cash-impressed',pathMatch: 'full' , data: { breadcrumb: 'Projects' } },
  { path: 'cash-impressed',component:CashImpressedComponent , data: { breadcrumb: 'Projects' } },
  { path: 'company-assets',component:CompanyAssetsComponent , data: { breadcrumb: 'Projects' } },
  { path: 'employee-list',component:EmployeeListComponent , data: { breadcrumb: 'Projects' } },
  { path: 'salary-sheet',component:SalarySheetComponent , data: { breadcrumb: 'Projects' } },



]

@NgModule({
  declarations: [EmployeeListComponent, SalarySheetComponent, CompanyAssetsComponent, CashImpressedComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class EmployeeDetailsModule { }
