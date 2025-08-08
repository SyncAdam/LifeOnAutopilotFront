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

  private profile =  new BehaviorSubject<KeycloakProfile | null>(null);
  Profile$: Observable<KeycloakProfile | null> = this.profile.asObservable();

  keycloak:Keycloak = new Keycloak({
    url: "https://sibulabs.net",
    realm: "master",
    clientId: "LifeOnAutopilot"
  });

  async Init()
  {
    try {
      const authenticated = await this.keycloak.init({ onLoad:'login-required' });
      if (authenticated) {
          console.log('User is authenticated');
          this.keycloak.loadUserInfo();
          const profile = await this.keycloak.loadUserProfile();
          this.profile.next(profile);
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

  getProfile(): Observable<KeycloakProfile | null>{
    return this.Profile$;
  }
}
