import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const REFRESHTOKEN_KEY = 'auth-refreshtoken';
const USER_KEY = 'auth-user';
const ROLES_KEY = 'auth-role';

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  setRoles(roles: string[]) {
    if(roles.includes('Owner')){
    localStorage.setItem(ROLES_KEY,"Owner");
    }
    else if(roles.includes('Admin')){
      localStorage.setItem(ROLES_KEY,"Admin");
    }
    else if(roles.includes('FinanceUser')){
      localStorage.setItem(ROLES_KEY,"FinanceUser");
    }
  }
  getRole(): string | null {
    return localStorage.getItem(ROLES_KEY);
  }

  constructor() { }
  signOut(): void {
    localStorage.clear();
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);

    // const user = this.getUser();
    // if (user.id) {
    //   this.saveUser({ ...user, accessToken: token });
    // }
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveRefreshToken(token: string): void {
    localStorage.removeItem(REFRESHTOKEN_KEY);
    localStorage.setItem(REFRESHTOKEN_KEY, token);
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem(REFRESHTOKEN_KEY);
  }

  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {}
  }
 }
