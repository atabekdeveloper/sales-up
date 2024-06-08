import { TSourceCategoryItem } from './categories/source-categories.types';

export type TSourceItem = {
  id: number;
  title: string;
  source_category: TSourceCategoryItem;
  created_at: string;
  updated_at: string;
};
export type TSourceChange = {
  id?: number;
  title: string;
  source_category_id: number;
};
