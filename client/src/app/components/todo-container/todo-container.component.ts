import { Component } from '@angular/core'
import { TodoFormComponent } from '../todo-form/todo-form.component'

@Component({
  selector: 'app-todo-container',
  standalone: true,
  imports: [TodoFormComponent],
  templateUrl: './todo-container.component.html',
  styleUrl: './todo-container.component.scss',
})

// Receive data from TodoFormComponent
// Send data to TodoListComponent
export class TodoContainerComponent {}
