import { Popconfirm } from 'antd';
import { PopconfirmProps } from 'antd/lib';
import React from 'react';

const GlobalPopconfirm: React.FC<PopconfirmProps> = (_props) => (
  <Popconfirm {..._props} cancelText="Нет" okText="Да" placement="leftTop" />
);

export { GlobalPopconfirm };
