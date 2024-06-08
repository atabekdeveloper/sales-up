/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import { TGetParamsChange } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchCreateBotCourse,
  fetchDeleteBotCourse,
  fetchEditBotCourse,
  fetchGetBotCourses,
} from './bot-courses.services';

const useGetBotCoursesQuery = (params: TGetParamsChange) =>
  useQuery({
    queryFn: () => fetchGetBotCourses(params),
    queryKey: ['bot-course', ...Object.values(params)],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useCreateBotCourseMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchCreateBotCourse,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['bot-course'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditBotCourseMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditBotCourse,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['bot-course'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteBotCourseMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteBotCourse,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['bot-course'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useCreateBotCourseMutation,
  useDeleteBotCourseMutation,
  useEditBotCourseMutation,
  useGetBotCoursesQuery,
};
