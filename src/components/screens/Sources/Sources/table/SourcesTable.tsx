import { Tooltip } from 'antd';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HeadTable } from 'src/components/shareds';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetSourcesQuery } from 'src/services/user';
import { useFormStorageStore } from 'src/store';

import { useSourcesColumnsTable } from './useSourcesColumnsTable';

const SourcesTable: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data: sources, isLoading } = useGetSourcesQuery({ page: currentPage });

  const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);

  const columns = useSourcesColumnsTable();
  return (
    <UiTable
      dataSource={sources?.data}
      columns={columns}
      loading={isLoading}
      title={() => (
        <HeadTable
          title="Сети"
          childs={[
            <Tooltip title="Добавить">
              <UiButton icon={<AiOutlinePlus />} onClick={toggleDrawer} aria-label="Add" />
            </Tooltip>,
          ]}
        />
      )}
      pagination={{
        total: sources?.meta.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { SourcesTable };
