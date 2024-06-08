import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonShape, ButtonVariant } from '../../types/primitives';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() shape: ButtonShape = 'square';
  @Input() variant: ButtonVariant = 'primary';
  @Input() text: string = '';
  @Input() icon!: IconDefinition;

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
