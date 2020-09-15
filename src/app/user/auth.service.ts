import {Injectable} from '@angular/core';
import {IUser} from './login/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: IUser;

  constructor() {
  }

  loginUser(username: string, password: string) {
    return this.currentUser = {
      id: 1,
      username,
      firstName: 'Ante',
      lastName: 'Suki'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstname: string, lastname: string) {
    this.currentUser.firstName = firstname;
    this.currentUser.lastName = lastname;
  }
}
