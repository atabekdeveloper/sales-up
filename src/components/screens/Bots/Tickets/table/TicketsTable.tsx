import { Tooltip } from 'antd';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HeadTable } from 'src/components/shareds';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetBotTicketsQuery } from 'src/services/user';
import { useFormStorageStore } from 'src/store';

import { useTicketsColumnsTable } from './useTicketsColumnsTable';

const TicketsTable: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data: tickets, isLoading } = useGetBotTicketsQuery({ page: currentPage });

  const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);

  const columns = useTicketsColumnsTable();
  return (
    <UiTable
      dataSource={tickets?.data}
      columns={columns}
      loading={isLoading}
      title={() => (
        <HeadTable
          title="Билеты"
          childs={[
            <Tooltip title="Добавить">
              <UiButton icon={<AiOutlinePlus />} onClick={toggleDrawer} aria-label="Add" />
            </Tooltip>,
          ]}
        />
      )}
      pagination={{
        total: tickets?.meta.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { TicketsTable };
