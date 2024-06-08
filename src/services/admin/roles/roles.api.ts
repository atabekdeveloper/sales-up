import { useQuery } from '@tanstack/react-query';

import { fetchGetRoles } from './roles.services';

const useGetRolesQuery = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useQuery({
    queryFn: fetchGetRoles,
    queryKey: ['role'],
  });

export { useGetRolesQuery };
