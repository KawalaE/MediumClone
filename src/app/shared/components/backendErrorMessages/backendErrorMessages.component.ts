import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BackendErrorsInterface } from './../../../auth/types/backendErrors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class BackendErrorsMessages {
  @Input() backendErrors: BackendErrorsInterface = {};

  errorMessages: string[] = [];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join('');
      return `${name} ${messages}`;
    });
  }
}
