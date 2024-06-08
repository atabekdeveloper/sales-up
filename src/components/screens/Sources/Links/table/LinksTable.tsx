import { Tooltip } from 'antd';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import { HeadTable } from 'src/components/shareds';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetSourceLinksQuery } from 'src/services/user';
import { useFormStorageStore } from 'src/store';

import { useLinksColumnsTable } from './useLinksColumnsTable';

const LinksTable: React.FC = () => {
  const { id, title } = useParams();
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data: links, isLoading } = useGetSourceLinksQuery(Number(id), { page: currentPage });

  const navigate = useNavigate();
  const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);

  const columns = useLinksColumnsTable();
  return (
    <UiTable
      dataSource={links?.data}
      columns={columns}
      loading={isLoading}
      title={() => (
        <HeadTable
          title={`${title}`}
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
        total: links?.meta.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { LinksTable };
