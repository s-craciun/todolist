import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItem } from '../../models/todoItem';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  todoList$!: Observable<TodoItem[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoList$ = this.todoService.getTodolists();
  }
}
