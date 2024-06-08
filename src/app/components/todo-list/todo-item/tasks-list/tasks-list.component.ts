import { Component, Input, OnInit } from '@angular/core';
import { TasksItemComponent } from './tasks-item/tasks-item.component';
import { TaskItem } from '../../../../models/taskItem';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../../../services/tasks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TasksItemComponent, CommonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent implements OnInit {
  @Input() todoId: string = '';
  tasksList$!: Observable<TaskItem[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasksList$ = this.taskService.getTasksByTodolistId(this.todoId);
  }
}
