import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { M } from "../../../../node_modules/@angular/material/form-field.d-C6p5uYjG"; 
import { UserProfileService } from '../../services/user-profile';

@Component({
  selector: 'loa-login',
  imports: [M],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private userService : UserProfileService) {}

  OnLoginClick()
  {
    this.userService.keycloak.createLoginUrl
  }
}
