import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectWiseDetailsComponent } from './project-wise-details.component';
import { MusterRollComponent } from './muster-roll/muster-roll.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { LaborLicenseComponent } from './labor-license/labor-license.component';

export const routes = [
  { path: '',redirectTo:'attendance',pathMatch: 'full' , data: { breadcrumb: 'Projects' } },
  { path: 'attendance',component:AttendanceComponent, data: { breadcrumb: 'Projects' } },
  { path: 'labor-license',component:LaborLicenseComponent, data: { breadcrumb: 'Projects' } },
  { path: 'muster-roll',component:MusterRollComponent, data: { breadcrumb: 'Projects' } },
]


@NgModule({
  declarations: [ MusterRollComponent, AttendanceComponent, LaborLicenseComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class ProjectWiseDetailsModule { }
