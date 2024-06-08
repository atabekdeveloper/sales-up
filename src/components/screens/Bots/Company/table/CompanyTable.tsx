import { Tooltip } from 'antd';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HeadTable } from 'src/components/shareds';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetCompanyQuery } from 'src/services/user';
import { useFormStorageStore } from 'src/store';

import { useCompanyColumnsTable } from './useCompanyColumnsTable';

const CompanyTable: React.FC = () => {
  const { data: company, isLoading } = useGetCompanyQuery();

  const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);

  const columns = useCompanyColumnsTable();
  return (
    <UiTable
      dataSource={company?.data}
      columns={columns}
      loading={isLoading}
      title={() => (
        <HeadTable
          title="Компания"
          childs={[
            <Tooltip title="Добавить">
              <UiButton
                icon={<AiOutlinePlus />}
                onClick={toggleDrawer}
                aria-label="Add"
                hidden={!!company?.data.length}
              />
            </Tooltip>,
          ]}
        />
      )}
      pagination={false}
    />
  );
};

export { CompanyTable };
