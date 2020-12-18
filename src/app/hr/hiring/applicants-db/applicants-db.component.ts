import { AddApplicantComponent } from './add-applicant/add-applicant.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicants-db',
  templateUrl: './applicants-db.component.html',
  styleUrls: ['./applicants-db.component.scss']
})
export class ApplicantsDbComponent implements OnInit {
  filterToggle:boolean;
  items=[
    {"apl": "APL84" ,"name":"Niharika Reddy","jobcode":"OMMM01","jobtitle":"Marketing Manager","phone":"8309115299","skills":"","recruiter":"Ridhima Rao P","resume":"","iq":"0","mbti":"ENTJ-A","screening":"2/12","status":"In Progress"},
    {"apl": "APL83" ,"name":"Sravani Mashetty","jobcode":"SBA001","jobtitle":"Software Engineer","phone":"0309225299","skills":"","recruiter":"	Rachana Silveri","resume":"","iq":"111","mbti":"ENTJ-A","screening":"6/12","status":"Selected"},
    {"apl": "APL82" ,"name":"Hiranya","jobcode":"OMMM01","jobtitle":"Marketing Manager","phone":"9309335299","skills":"","recruiter":"Ridhima Rao P","resume":"","iq":"112","mbti":"ENTJ-A","screening":"3/12","status":"In Progress"},
    {"apl": "APL81" ,"name":"Sathyam Rao","jobcode":"SBA001","jobtitle":"Software Engineer","phone":"8309445299","skills":"","recruiter":"	Rachana Silveri","resume":"","iq":"113","mbti":"ENTJ-A","screening":"2/12","status":"Selected"},
    {"apl": "APL80" ,"name":"Navjeet Singh","jobcode":"OMMM01","jobtitle":"Marketing Manager","phone":"7309225299","skills":"","recruiter":"Ridhima Rao P","resume":"","iq":"140","mbti":"ENTJ-A","screening":"2/12","status":"In Progress"},
  ]

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  public opencontactDialog() {
    let dialogRef = this.dialog.open(AddApplicantComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}
}
