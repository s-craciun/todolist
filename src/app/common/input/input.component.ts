import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputType, InputVariant } from '../../types/primitives';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() type: InputType = 'box';
  @Input() variant: InputVariant = 'primary';
  @Input() placeholder: string = '';
  inputValue: string = '';

  getColor() {
    switch (this.variant) {
      case 'success':
        return 'var(--color-success)';
      case 'danger':
        return 'var(--color-danger)';
      case 'warning':
        return 'var(--color-warning)';
      default:
        return 'var(--color-primary)';
    }
  }
}
