import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface RegistrationForm {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
})
export class RegisterComponent {
  fb = inject(FormBuilder);

  signUpForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  public onSubmit(): void {
    console.log('form', this.signUpForm.getRawValue());
  }
}
