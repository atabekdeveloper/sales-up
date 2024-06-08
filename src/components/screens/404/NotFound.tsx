import { Result } from 'antd';
import React from 'react';
import logo from 'src/assets/images/logo.png';

const NotFound: React.FC = () => (
  <Result
    title="Страница не найдена"
    style={{ margin: 'auto' }}
    icon={<img src={logo} alt="Logo" />}
  />
);

export default NotFound;
