import { Component } from '@angular/core'

import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

type TodoItem = string

type TodoList = TodoItem[]

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent {
  todoFormControl = new FormControl('')
  todoList: TodoList = []

  addTodo(event: any) {
    // TODO: how to disable button until input has value
    if (this.todoFormControl.value) {
      this.todoList.push(this.todoFormControl.value)
      this.todoFormControl.setValue('')
    }
  }
}
