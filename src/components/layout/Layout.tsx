import clsx from 'clsx';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekYear';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthPersistStore, useToggleStore } from 'src/store';

import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';

import s from './layout.module.scss';

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

const Layout: React.FC = () => {
  const token = useAuthPersistStore((state) => state.accessToken);
  const { isDrawer, isCollapsed } = useToggleStore();
  return (
    <div className={clsx(s.layout, !isDrawer && s.activeDrawer, isCollapsed && s.activeCollapsed)}>
      <Header />
      <Navbar />
      <main>{token ? <Outlet /> : <Navigate to="/login" />}</main>
    </div>
  );
};

export { Layout };
