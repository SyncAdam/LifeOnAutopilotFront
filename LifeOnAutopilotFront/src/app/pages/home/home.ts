import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile';
import { KeycloakProfile } from 'keycloak-js';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'loa-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [TitleCasePipe]
})
export class Home implements OnInit{
  profile?: KeycloakProfile | null
  constructor(private userProfileService: UserProfileService) {}

  ngOnInit() {
    this.profile = this.userProfileService.getProfile();
  }

  logoutUser()
  {
    this.userProfileService.logout();
  }

  getUsername()
  {
    this.profile = this.userProfileService.getProfile();
  }
}