import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { UsersService } from './users.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { AlertService } from '../../shared/services/alert.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [UsersService, AlertService]
})
export class UsersComponent implements OnInit {

    // tableList: Object[] = [
    //     { intApplicantId: 1, vcName: 'Kalyan Kurasala', vcEmail: "Kalyan@optionmatrix.com",vcStatus: true , vcPhone: '9834578945', vcPosition: "Developer", vcSkills: ".Net", vcExperience: '3.5', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 100, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "4/15",workHours:8.00,Permissions:'12/20' },
    //     { intApplicantId: 2, vcName: 'S V Radha Krishna', vcEmail: "rk@optionmatrix.com",vcStatus: false, vcPhone: '9584672150', vcPosition: "Developer", vcSkills: "PHP", vcExperience: '2.5', vcCategory: 'IT', vcJobType: "Contract", vcResumePath: "", dtUpdated: null, intIQ: 110, vcReferral: "No", vcHRRecruiter: "Siva", vcProcess: "8/15",workHours:10.00,Permissions:'12/20' },
    //     { intApplicantId: 3, vcName: 'Pranab Ray', vcEmail: "Pranab@gmail.com",vcStatus: true, vcPhone: '7854112547', vcPosition: "Developer", vcSkills: "Java", vcExperience: '3.1', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 108, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "2/15",workHours:8.00,Permissions:'12/20' },
    //     {intApplicantId:4,vcName:'Anji', vcEmail:'Anji@optionmatrix.com',vcStatus:true, vcPhone:9875896580,workHours:8.00,Permissions:'5/20'},
    //     {intApplicantId:5,vcName:'Bharath', vcEmail:'Bharath@optionmatrix.com',vcStatus:true, vcPhone:9988775588,workHours:8.00,Permissions:'5/20'},
    //     {intApplicantId:6,vcName:'Amit Kumar', vcEmail:'Amit@optionmatrix.com',vcStatus:true, vcPhone:8575857555,workHours:8.00,Permissions:'4/20'},
    //     {intApplicantId:7,vcName:'Durga Prasad', vcEmail:'Durga@optionmatrix.com',vcStatus:false, vcPhone:6987698768,workHours:8.00,Permissions:'7/20'},
    //     {intApplicantId:8,vcName:'Vamsi', vcEmail:'Vamsi@optionmatrix.com',vcStatus:true, vcPhone:6020504060,workHours:8.00,Permissions:'9/20'},
    //     {intApplicantId:9,vcName:'Praveen', vcEmail:'Praveen@optionmatrix.com',vcStatus:true, vcPhone:8877998877,workHours:8.00,Permissions:'7/20'},
    //     {intApplicantId:10,vcName:'Naveen', vcEmail:'Naveen@optionmatrix.com',vcStatus:false, vcPhone:7897897894,workHours:10.00,Permissions:'11/20'},
    //     {intApplicantId:11,vcName:'Vaibhav', vcEmail:'Vaibhav@optionmatrix.com',vcStatus:true, vcPhone:852014789,workHours:8.00,Permissions:'16/20'},
    //   ];
    tableList: any;

    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete this.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change status.?';
    public cancelClicked: boolean = false;

    filterToggle: boolean;

    public searchText: string;
    public page: any;
    public settings: Settings;
    constructor(public appSettings: AppSettings,
        public dialog: MatDialog,
        public usersService: UsersService, private alertService: AlertService) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.getUser()
    }

    getUser() {
        this.tableList = null;
        this.usersService.getUser()
            .subscribe(
                data => {
                    this.tableList = data;
                }
            )
    }


    public openUserDialog(id) {
        let dialogRef = this.dialog.open(UserDialogComponent, {
            data: id,
            height: 'auto',
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(data => {
        });
    }


    deleteUser(){
        this.alertService.createAlert('Successfully deleted.', 1);
    }

    saveStatus() {
        this.alertService.createAlert('Successfully saved.', 1);
    }

}