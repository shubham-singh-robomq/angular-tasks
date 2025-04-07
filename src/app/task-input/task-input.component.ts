import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent {
  @Output() taskAdded = new EventEmitter<string>();
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      taskName: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.taskAdded.emit(this.taskForm.value.taskName);
      this.taskForm.reset();
    }
  }

}