import React from 'react';
import { IoReload } from 'react-icons/io5';
import { HeadTable } from 'src/components/shareds';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetLeadsQuery } from 'src/services/user';

import { useQueryClient } from '@tanstack/react-query';

import { useLeadsColumnsTable } from './useLeadsColumnsTable';

const LeadsTable: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const client = useQueryClient();

  const { data: leads, isLoading } = useGetLeadsQuery({ page: currentPage });

  const onRefetch = () => client.refetchQueries({ queryKey: ['lead'] });

  const columns = useLeadsColumnsTable();
  return (
    <UiTable
      dataSource={leads?.data}
      columns={columns}
      loading={isLoading}
      title={() => (
        <HeadTable
          title="Клиенты"
          childs={[
            <UiButton onClick={onRefetch} icon={<IoReload />}>
              Обновить
            </UiButton>,
          ]}
        />
      )}
      pagination={{
        total: leads?.meta.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { LeadsTable };
