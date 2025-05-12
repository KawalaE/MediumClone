import { PopularTagType } from '../../../types/popularTag.type';

export interface PopularTagsInterface {
  isLoading: boolean;
  error: string | null;
  data: PopularTagType[] | null;
}
