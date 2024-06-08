import { Component } from '@angular/core';
import { InputComponent } from '../../common/input/input.component';
import { ButtonComponent } from '../../common/button/button.component';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faPlus = faPlus;

  constructor(private todoService: TodoService) {}

  onClick(value: string) {
    this.todoService.createTodolist(value);
  }
}
