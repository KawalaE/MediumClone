import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { register } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';

interface RegistrationForm {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
})
export class RegisterComponent {
  public fb = inject(FormBuilder);
  private store = inject(Store);

  signUpForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  public onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.signUpForm.getRawValue(),
    };
    this.store.dispatch(register({ request }));
  }
}
