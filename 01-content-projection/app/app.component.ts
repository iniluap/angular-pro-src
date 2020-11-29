import { Component } from '@angular/core';

import { User } from './auth-form/auth-form.interface';
import { Order } from './shop-form/shop-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div class="form-wrapper">
      <auth-form 
        (submitted)="createUser($event)">
        <h3>Create account</h3>
        <button type="submit">
          Join us
        </button>
      </auth-form>
      <auth-form 
        (submitted)="loginUser($event)">
        <h3>Login</h3>
        <auth-remember
          (checked)="rememberUser($event)">
        </auth-remember>
        <auth-remember
          (checked)="rememberUser($event)">
        </auth-remember>
        <auth-remember
          (checked)="rememberUser($event)">
        </auth-remember>
        <button type="submit">
          Login
        </button>
      </auth-form>
    </div>
  `
})
export class AppComponent {
  rememberMe: boolean = false;

  rememberUser(value: boolean) {
    this.rememberMe = value;
  }

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.rememberMe);
  }

}