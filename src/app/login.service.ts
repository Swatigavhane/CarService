import { Injectable } from '@angular/core';

const USER = 'TOKEN';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  setToken(user: string)
  {
    localStorage.setItem(USER , user);
  }

  getUser():string
  {
    return localStorage.getItem(USER);
  }

  isLogged() {
    return localStorage.getItem(USER) != null;
  }

  logout()
  {
    localStorage.setItem(USER,null);
    
  }
}
