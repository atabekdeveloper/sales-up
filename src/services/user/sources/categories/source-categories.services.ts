import { api } from 'src/api';
import { SR } from 'src/services/index.types';

import { TSourceCategoryItem } from './source-categories.types';

export const fetchGetSourceCategories = async (): Promise<SR<TSourceCategoryItem>> => {
  const res = await api.get('/source-categories');
  return res.data;
};
