import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants/constants';
import { TaskItem } from '../models/taskItem';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasksList$ = new BehaviorSubject<TaskItem[]>([]);

  constructor(private http: HttpClient) {}

  getTasksByTodolistId(todoId: string) {
    this.http
      .get<TaskItem[]>(`${API_URL}tasks?&todoId=${todoId}`)
      .subscribe((data) => this.tasksList$.next([...data]));
    return this.tasksList$;
  }

  createTask(todoId: string, title: string) {
    const newTaskItem: TaskItem = {
      id: `${Math.random()}-${title}`,
      todoId,
      title,
      status: false,
    };

    this.http
      .post<TaskItem>(`${API_URL}tasks`, newTaskItem)
      .subscribe(() => this.getTasksByTodolistId(todoId));
  }
}
