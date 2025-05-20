import { routerNavigatedAction } from '@ngrx/router-store';
import { createFeature, createReducer, on } from '@ngrx/store';
import { CreateArticleStateInterface } from '../types/createArticleState.interface';
import { createArticleAtions } from './actions';

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const createArticleFeature = createFeature({
  name: 'createArticle',
  reducer: createReducer(
    initialState,
    on(createArticleAtions.createArticle, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(createArticleAtions.createArticleSuccess, (state) => ({
      ...state,
      isSubmitting: false,
    })),
    on(createArticleAtions.createArticleFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(routerNavigatedAction, () => initialState)
  ),
});

export const {
  name: createArticleFeatureKey,
  reducer: createArticleReducer,
  selectIsSubmitting,
  selectValidationErrors,
} = createArticleFeature;
