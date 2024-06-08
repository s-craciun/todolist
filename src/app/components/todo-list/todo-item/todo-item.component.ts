import { Component, Input } from '@angular/core';
import { TodoItem } from '../../../models/todoItem';
import { ButtonComponent } from '../../../common/button/button.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { InputComponent } from '../../../common/input/input.component';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../../services/tasks.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [InputComponent, ButtonComponent, TasksListComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todoItem!: TodoItem;
  faPlus = faPlus;

  constructor(private taskService: TaskService) {}

  onClick(value: string) {
    console.log('Id ' + this.todoItem.id);

    this.taskService.createTask(this.todoItem.id, value);
  }
}
