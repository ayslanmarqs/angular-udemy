import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from '../validators/password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

    form2: FormGroup;
    
    constructor(fb: FormBuilder) {
      this.form2 = fb.group({
        oldPassword: [ '', Validators.required],
        newPassword: [ '', Validators.required],
        confirmPassword: [ '', Validators.required],
      });
    }

    form = new FormGroup({
      oldPassword: new FormControl('', Validators.required, PasswordValidators.checkOldPassword),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required )
    }, PasswordValidators.checkPasswordEquality)

    get oldPassword() {
      return this.form.get('oldPassword');
    }

    get newPassword() {
      return this.form.get('newPassword');
    }

    get confirmPassword() {
      return this.form.get('confirmPassword');
    }

    getError(error: string) : boolean {
      return this.form.hasError(error);
    }
    
}
