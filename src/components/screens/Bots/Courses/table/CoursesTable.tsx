import { Tooltip } from 'antd';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HeadTable } from 'src/components/shareds';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetBotCoursesQuery } from 'src/services/user';
import { useFormStorageStore } from 'src/store';

import { useCoursesColumnsTable } from './useCoursesColumnsTable';

const CoursesTable: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data: courses, isLoading } = useGetBotCoursesQuery({ page: currentPage });

  const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);

  const columns = useCoursesColumnsTable();
  return (
    <UiTable
      dataSource={courses?.data}
      columns={columns}
      loading={isLoading}
      title={() => (
        <HeadTable
          title="Курсы"
          childs={[
            <Tooltip title="Добавить">
              <UiButton icon={<AiOutlinePlus />} onClick={toggleDrawer} aria-label="Add" />
            </Tooltip>,
          ]}
        />
      )}
      pagination={{
        total: courses?.meta.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { CoursesTable };
