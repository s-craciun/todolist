import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../../../common/button/button.component';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CheckboxComponent } from '../../../../../common/checkbox/checkbox.component';
import { TaskItem } from '../../../../../models/taskItem';

@Component({
  selector: 'app-tasks-item',
  standalone: true,
  imports: [ButtonComponent, CheckboxComponent],
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css',
})
export class TasksItemComponent {
  faTrash = faTrash;

  @Input() tasksItem!: TaskItem;
}
