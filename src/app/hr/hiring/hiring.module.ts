import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiringComponent } from './hiring.component';
import { ApplicantsDbComponent } from './applicants-db/applicants-db.component';
import { OfferLetterComponent } from './offer-letter/offer-letter.component';
import { AddApplicantComponent } from './applicants-db/add-applicant/add-applicant.component';


export const routes = [
  { path: '',redirectTo:'applicants-db' ,pathMatch: 'full', data: { breadcrumb: 'Projects' } },
  { path: 'applicants-db',component:ApplicantsDbComponent , data: { breadcrumb: 'Projects' } },

  { path: 'offer-letter',component:OfferLetterComponent , data: { breadcrumb: 'Projects' } },




]


@NgModule({
  declarations: [ ApplicantsDbComponent, OfferLetterComponent, AddApplicantComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ],
  entryComponents:[AddApplicantComponent]
})
export class HiringModule { }
