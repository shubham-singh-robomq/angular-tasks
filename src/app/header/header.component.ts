import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <a routerLink="/tasks" class="nav-brand">Task Manager</a>
          <div class="nav-right" *ngIf="currentUser$ | async as user">
            <span class="user-email">{{ user.email }}</span>
            <button (click)="logout()" class="logout-btn">Logout</button>
          </div>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background-color: #f8f9fa;
      padding: 1rem 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-brand {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
      text-decoration: none;
    }
    .nav-right {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .user-email {
      color: #666;
    }
    .logout-btn {
      padding: 0.5rem 1rem;
      background-color: #dc3545;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .logout-btn:hover {
      background-color: #c82333;
    }
  `]
})
export class HeaderComponent implements OnInit {
  currentUser$: Observable<User | null>;

  constructor(private authService: AuthService, private router: Router) {
    this.currentUser$ = this.authService.currentUser$;
  }

  ngOnInit(): void {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
} 