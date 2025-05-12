import { createFeature, createReducer, on } from '@ngrx/store';
import { PopularTagsInterface } from '../types/popularTagsState.interface';
import { tagsActions } from './actions';

const initialState: PopularTagsInterface = {
  isLoading: false,
  error: null,
  data: null,
};
const popularTagsFeature = createFeature({
  name: 'popularTags',
  reducer: createReducer(
    initialState,
    on(tagsActions.getTags, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(tagsActions.getTagsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.tags,
    })),
    on(tagsActions.getTagsFailure, (state) => ({
      ...state,
      isLoading: false,
    }))
  ),
});
export const {
  name: popularTagsKey,
  reducer: popularTagsReducer,
  selectIsLoading,
  selectError,
  selectData: selectPopularTagsData,
} = popularTagsFeature;
