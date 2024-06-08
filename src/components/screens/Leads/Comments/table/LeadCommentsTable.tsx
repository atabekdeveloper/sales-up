import { Tooltip } from 'antd';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import { HeadTable } from 'src/components/shareds';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetLeadCommentsQuery } from 'src/services/user';
import { useFormStorageStore } from 'src/store';

import { useLeadCommentsColumnsTable } from './useLeadCommentsColumnsTable';

const LeadCommentsTable: React.FC = () => {
  const { id, name } = useParams();
  const [currentPage, setCurrentPage] = React.useState(1);
  const navigate = useNavigate();

  const { data: leadComments, isLoading } = useGetLeadCommentsQuery(Number(id), {
    page: currentPage,
  });

  const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);

  const columns = useLeadCommentsColumnsTable();
  return (
    <UiTable
      dataSource={leadComments?.data}
      columns={columns}
      loading={isLoading}
      title={() => (
        <HeadTable
          title={`Комменты | ${name}`}
          childs={[
            <Tooltip title="Назад">
              <UiButton
                color="orange"
                icon={<IoMdArrowBack />}
                onClick={() => navigate(-1)}
                aria-label="Back"
              />
            </Tooltip>,
            <Tooltip title="Добавить">
              <UiButton icon={<AiOutlinePlus />} onClick={toggleDrawer} aria-label="Add" />
            </Tooltip>,
          ]}
        />
      )}
      pagination={{
        total: leadComments?.meta?.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { LeadCommentsTable };
