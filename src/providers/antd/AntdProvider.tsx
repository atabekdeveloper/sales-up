import { ConfigProvider } from 'antd';
import React from 'react';

const AntdProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ConfigProvider theme={{ token: { colorPrimary: '#08A1F7' } }}>{children}</ConfigProvider>
);

export { AntdProvider };
