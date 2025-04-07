import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

interface Task {
  id: number;
  name: string;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  editingTask: Task | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  onTaskAdded(taskName: string) {
    const newTask: Task = {
      id: Date.now(),
      name: taskName
    };
    this.tasks.push(newTask);
  }

  onTaskEdited(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
    this.editingTask = null;
  }

  onTaskDeleted(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  startEditing(task: Task) {
    this.editingTask = { ...task };
  }
}