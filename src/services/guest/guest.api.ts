/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useQuery } from '@tanstack/react-query';

import { fetchGetGuestItem } from './guest.services';

const useGetGuestItemQuery = (uuid: string) =>
  useQuery({
    queryFn: () => fetchGetGuestItem(uuid),
    queryKey: ['guest', uuid],
    onError: (err: any) => message.error(err.response.data.message),
  });

export { useGetGuestItemQuery };
