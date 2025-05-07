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
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    BackendErrorsMessages,
  ],
})
export class RegisterComponent {
  public fb = inject(FormBuilder);
  private store = inject(Store);
  private authService = inject(AuthService);

  signUpForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  public onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.signUpForm.getRawValue(),
    };

    this.store.dispatch(authActions.register({ request }));
    this.authService.register(request).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
