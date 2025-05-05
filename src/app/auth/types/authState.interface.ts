import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { BackendErrorsInterface } from './backendErrors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  // undefined - didn't make a request yet || null - we didn't get the user back from request
  currentUser: CurrentUserInterface | null | undefined;
  isLoading: boolean;
  validationErrors: BackendErrorsInterface | null;
}
