import { ConfigProvider, Table, TableProps } from 'antd';
import React from 'react';
import { useResponsive } from 'src/hooks';
import uniqid from 'uniqid';

const UiTable: React.FC<TableProps<any>> = (_props) => {
  const { isMobile } = useResponsive(700);
  return (
    <ConfigProvider theme={{ components: { Table: { headerBg: '#fff' } } }}>
      <Table
        rowKey={() => uniqid()}
        scroll={{ x: isMobile ? 'auto' : 1000 }}
        pagination={{ position: ['bottomCenter'] }}
        {..._props}
      />
    </ConfigProvider>
  );
};

export { UiTable };
