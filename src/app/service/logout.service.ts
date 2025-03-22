import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';


@Injectable({
    providedIn: 'root',
  })
  export class LogoutService {

    constructor(private keycloakService: KeycloakService) {

    }

    async logout() {
        await this.keycloakService.logout('http://localhost:4200/');
    }
   
  }