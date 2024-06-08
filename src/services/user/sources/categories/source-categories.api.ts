/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useQuery } from '@tanstack/react-query';

import { fetchGetSourceCategories } from './source-categories.services';

const useGetSourceCategoriesQuery = () =>
  useQuery({
    queryFn: fetchGetSourceCategories,
    queryKey: ['source-category'],
    onError: (err: any) => message.error(err.response.data.message),
  });

export { useGetSourceCategoriesQuery };
