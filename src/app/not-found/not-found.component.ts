import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <div class="actions">
        <a routerLink="/tasks" class="btn primary">Go to Tasks</a>
        <a routerLink="/login" class="btn secondary">Go to Login</a>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      text-align: center;
      padding: 2rem;
      max-width: 600px;
      margin: 0 auto;
    }
    h1 {
      font-size: 6rem;
      color: #dc3545;
      margin: 0;
      line-height: 1;
    }
    h2 {
      font-size: 2rem;
      color: #333;
      margin: 1rem 0;
    }
    p {
      color: #666;
      margin-bottom: 2rem;
    }
    .actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    .btn.primary {
      background-color: #007bff;
      color: white;
    }
    .btn.primary:hover {
      background-color: #0056b3;
    }
    .btn.secondary {
      background-color: #6c757d;
      color: white;
    }
    .btn.secondary:hover {
      background-color: #5a6268;
    }
  `]
})
export class NotFoundComponent {} 