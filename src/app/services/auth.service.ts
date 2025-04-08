import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private users: User[] = [];

  constructor() {
    const storedUser = localStorage.getItem('currentUser');
    console.log(storedUser);
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  signup(email: string, password: string): boolean {
    if (this.users.some(user => user.email === email)) {
      return false;
    }

    const newUser: User = { email, password };
    this.users.push(newUser);
    return true;
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (user) {
      this.currentUserSubject.next(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }
}
