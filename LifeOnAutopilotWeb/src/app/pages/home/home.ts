import { Component, OnInit,  } from '@angular/core';

import { UserProfileService } from '../../services/user-profile';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'loa-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
  profile?: KeycloakProfile | null
  constructor(private userProfileService: UserProfileService) {}

  ngOnInit() {
    this.userProfileService.Profile$.subscribe(p => {
      console.log("Subscribed from home.");
      this.profile = p;
    });
  }
}
