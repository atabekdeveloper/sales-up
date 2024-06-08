/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useQuery } from '@tanstack/react-query';

import { fetchGetLeadStatuses } from './lead-statuses.services';

const useGetLeadStatusesQuery = () =>
  useQuery({
    queryFn: fetchGetLeadStatuses,
    queryKey: ['lead-status'],
    onError: (err: any) => message.error(err.response.data.message),
  });

export { useGetLeadStatusesQuery };
