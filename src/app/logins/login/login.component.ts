import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../../theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public form: FormGroup;
  public settings: Settings;
  constructor(public alertService:AlertService,public appSettings: AppSettings, public fb: FormBuilder, public router: Router) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }
  
  ngOnInit() {
  }
  
  public onSubmit(values) {
    if (this.form.valid) {
      if (this.form.valid && values.email == "admin@kbpl.com" && values.password == 'password') {
        this.router.navigate(['/mrc/radar']);
        this.alertService.createAlert("Login successful",1);
      }
      else {
        this.alertService.createAlert("Invalid Credentials",0);
      }
    }
  }
  
  
  ngAfterViewInit() {
    this.settings.loadingSpinner = false;
    localStorage.setItem('userType', '');
  }
}