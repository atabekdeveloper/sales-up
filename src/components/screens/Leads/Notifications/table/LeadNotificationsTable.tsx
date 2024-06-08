import { Tooltip } from 'antd';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HeadTable } from 'src/components/shareds';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetLeadNotificationsQuery } from 'src/services/user';
import { useFormStorageStore } from 'src/store';

import { useLeadNotificationsColumnsTable } from './useLeadNotificationsColumnsTable';

const LeadNotificationsTable: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data: leadNotifications, isLoading } = useGetLeadNotificationsQuery({
    page: currentPage,
  });

  const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);

  const columns = useLeadNotificationsColumnsTable();
  return (
    <UiTable
      dataSource={leadNotifications?.data}
      columns={columns}
      loading={isLoading}
      title={() => (
        <HeadTable
          title="Уведомление"
          childs={[
            <Tooltip title="Добавить">
              <UiButton icon={<AiOutlinePlus />} onClick={toggleDrawer} aria-label="Add" />
            </Tooltip>,
          ]}
        />
      )}
      pagination={{
        total: leadNotifications?.meta.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { LeadNotificationsTable };
