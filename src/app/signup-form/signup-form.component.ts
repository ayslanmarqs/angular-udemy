import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UsernameValidators } from '../validators/username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        UsernameValidators.cannotContainSpace 
      ],
      UsernameValidators.shouldBeUnique), //async validators go in third argument
      password: new FormControl('', Validators.required)
    })
  })

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

  get username() {
    return this.form.get('account.username');
  }
  get password() {
    return this.form.get('account.password');
  }
}
