import { Space } from 'antd';
import React from 'react';

import s from './head.module.scss';

interface IHeadTable {
  title: string;
  childs?: React.ReactNode[];
}

const HeadTable: React.FC<IHeadTable> = ({ childs, title }) => (
  <div className={s.headTable}>
    <h3>{title}</h3>
    <Space>
      {childs?.map((el, i) => (
        <div key={i}>{el}</div>
      ))}
    </Space>
  </div>
);

export { HeadTable };
