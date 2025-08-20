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
  public profile: KeycloakProfile | null = null;
  constructor(public userProfileService: UserProfileService) 
  {
    this.userProfileService.Profile.subscribe(v => this.profile = v);
  }

  logoutUser()
  {
    this.userProfileService.logout();
  }
}