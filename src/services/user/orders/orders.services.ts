/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR, SRO, TGetParamItem, TGetParamsChange } from 'src/services/index.types';

import { TOrderChange, TOrderItem, TOrderParams } from './orders.types';

export const fetchGetOrders = async (
  params: TGetParamsChange & TOrderParams,
): Promise<SR<TOrderItem>> => {
  const res = await api.get('/orders', {
    params: { ...params, limit: params?.limit || 10, page: params.page },
  });
  return res.data;
};
export const fetchGetOrderStatuses = async (): Promise<SR<TGetParamItem>> => {
  const res = await api.get('/order-statuses');
  return res.data;
};
export const fetchEditOrder = async (values: TOrderChange): Promise<SRO<null>> => {
  const res = await api.patch(`/orders/${values.id}`, values);
  return res.data;
};
