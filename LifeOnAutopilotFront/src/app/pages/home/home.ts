import { Component, OnInit, resource } from '@angular/core';
import { UserProfileService } from '../../services/user-profile';
import { KeycloakProfile } from 'keycloak-js';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'loa-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [TitleCasePipe]
})
export class Home{
  constructor(public userProfileService: UserProfileService) {}

  logoutUser()
  {
    this.userProfileService.logout();
  }
}