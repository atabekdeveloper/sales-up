import { Tooltip } from 'antd';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HeadTable } from 'src/components/shareds';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetAdminTasksQuery } from 'src/services/index.api';
import { useFormStorageStore } from 'src/store';

import { useTasksColumnsTable } from './useTasksColumnsTable';

const AdminTasksTable: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data: tasks, isLoading } = useGetAdminTasksQuery({
    page: currentPage,
  });

  const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);

  const columns = useTasksColumnsTable();
  return (
    <UiTable
      dataSource={tasks?.data}
      columns={columns}
      loading={isLoading}
      title={() => (
        <HeadTable
          title="Задание"
          childs={[
            <Tooltip title="Добавить">
              <UiButton icon={<AiOutlinePlus />} onClick={toggleDrawer} aria-label="Add" />
            </Tooltip>,
          ]}
        />
      )}
      pagination={{
        total: tasks?.meta.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { AdminTasksTable };
