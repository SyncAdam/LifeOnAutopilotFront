// user-profile.service.ts
import { computed, Injectable, signal, Signal } from '@angular/core';
import Keycloak, { KeycloakProfile } from 'keycloak-js'; // or your specific import
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  constructor() 
  {
    this.Init();
  }

  Profile : Subject<KeycloakProfile> = new Subject;

  keycloak:Keycloak = new Keycloak({
    url: "https://sibulabs.net/realms/master",
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
          this.Profile.next(await this.keycloak.loadUserProfile());

          if(this.Profile != null)
            console.log(`User is now logged in.`);
      } else {  
          console.log('User is not authenticated');
      }
    } 
    catch (error) 
    {
      console.error('Failed to initialize adapter:', error);
    } 
  }
}
