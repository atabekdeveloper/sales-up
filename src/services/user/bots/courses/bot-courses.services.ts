/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR, SRO, TGetParamsChange, TMessage } from 'src/services/index.types';

import { TBotCourseChange, TBotCourseItem } from './bot-courses.types';

export const fetchGetBotCourses = async (params: TGetParamsChange): Promise<SR<TBotCourseItem>> => {
  const res = await api.get('/courses', {
    params: { limit: params?.limit || 10, page: params.page },
  });
  return res.data;
};
export const fetchCreateBotCourse = async (
  values: TBotCourseChange,
): Promise<SRO<TBotCourseItem>> => {
  const res = await api.post('/courses', values);
  return res.data;
};
export const fetchEditBotCourse = async (
  values: TBotCourseChange,
): Promise<SRO<TBotCourseItem>> => {
  const res = await api.put(`/courses/${values.id}`, values);
  return res.data;
};
export const fetchDeleteBotCourse = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/courses/${id}`);
  return res.data;
};
