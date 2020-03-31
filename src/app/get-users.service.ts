import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  private user: User = {
    firstName: 'John',
    lastName: 'Cena'
  };

  constructor( ) { }

  getUser(): User {
    return this.user;
  }
}
