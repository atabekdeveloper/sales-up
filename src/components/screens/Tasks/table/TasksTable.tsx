import React from 'react';
import { HeadTable } from 'src/components/shareds';
import { UiTable } from 'src/components/ui';
import { useGetUserTasksQuery } from 'src/services/index.api';

import { useUserTasksColumnsTable } from './useTasksColumnsTable';

const UserTasksTable: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data: tasks, isLoading } = useGetUserTasksQuery({
    page: currentPage,
  });

  const columns = useUserTasksColumnsTable();
  return (
    <UiTable
      dataSource={tasks?.data}
      columns={columns}
      loading={isLoading}
      title={() => <HeadTable title="Задание" />}
      pagination={{
        total: tasks?.meta.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { UserTasksTable };
