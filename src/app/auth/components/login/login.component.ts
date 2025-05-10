import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { BackendErrorsMessages } from '../../../shared/components/backendErrorMessages/backendErrorMessages.component';
import { AuthService } from '../../services/auth.service';
import { authActions } from '../../store/actions';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

interface LoginForm {
  email: string;
  password: string;
}

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    BackendErrorsMessages,
  ],
})
export class LoginComponent {
  public fb = inject(FormBuilder);
  private store = inject(Store);
  private authService = inject(AuthService);

  signUpForm = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  public onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.signUpForm.getRawValue(),
    };

    this.store.dispatch(authActions.login({ request }));
    this.authService.login(request).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
