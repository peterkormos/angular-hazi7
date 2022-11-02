import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly userName_keyName = 'userName';

  login(userName: string) {
    window.localStorage.setItem(this.userName_keyName, userName);
  }

  logout() {
    window.localStorage.removeItem(this.userName_keyName);
  }

  getUserName(): string | undefined {
    let user = window.localStorage.getItem(this.userName_keyName);

    return user == null ? undefined : user;
  }

  constructor() { }
}
