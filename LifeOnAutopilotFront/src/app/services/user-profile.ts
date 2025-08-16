// user-profile.service.ts
import { Injectable } from '@angular/core';
import Keycloak, { KeycloakProfile } from 'keycloak-js'; // or your specific import
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  constructor() 
  {
    this.Init();
  }

  profile :KeycloakProfile | null = null;

  keycloak:Keycloak = new Keycloak({
    url: "https://sibulabs.net",
    realm: "master",
    clientId: "LifeOnAutopilot"
  });

  logout()
  {
    this.keycloak.logout();
  }

  async Init()
  {
    try {
      const authenticated = await this.keycloak.init({ onLoad:'login-required' });
      if (authenticated) {
          console.log('User is authenticated');
          this.keycloak.loadUserInfo();
          const profile = await this.keycloak.loadUserProfile();
          this.profile = profile
          console.log(`User ${profile.username} is now logged in.`);
      } else {  
          console.log('User is not authenticated');
      }
    } 
    catch (error) 
    {
      console.error('Failed to initialize adapter:', error);
    } 
  }

  getProfile(): KeycloakProfile | null{
    return this.profile;
  }
}
