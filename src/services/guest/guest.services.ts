import { api } from 'src/api';
import { SRO } from 'src/services/index.types';

import { TOrderItem } from '../user/orders/orders.types';

export const fetchGetGuestItem = async (uuid: string): Promise<SRO<TOrderItem>> => {
  const res = await api.get(`/guest/orders/${uuid}`);
  return res.data;
};
