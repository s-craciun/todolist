import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todoItem';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants/constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private todoList$ = new BehaviorSubject<TodoItem[]>([]);

  constructor(private http: HttpClient) {}

  getTodolists() {
    this.http
      .get<TodoItem[]>(`${API_URL}todolists`)
      .subscribe((data) => this.todoList$.next([...data]));
    return this.todoList$;
  }

  createTodolist(title: string) {
    const newTodoItem: TodoItem = {
      id: `${Math.random()}-${title}`,
      title,
      filter: 'all',
    };

    this.http
      .post<TodoItem>(`${API_URL}todolists`, newTodoItem)
      .subscribe(() => this.getTodolists());
  }
}
