import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent {
  faCheck = faCheck;

  @Input({ required: true }) id: string = '';
  @Input({ required: true }) checked: boolean = false;
}
