import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UiMenu } from 'src/components/ui';
import { useResponsive } from 'src/hooks';
import { useAuthPersistStore, useToggleStore } from 'src/store';

import { routes } from '../routes';

import s from './navbar.module.scss';

const NavbarMenu: React.FC = () => {
  const { isCollapsed, toggleDrawer } = useToggleStore();
  const { isMobile } = useResponsive(900);

  const roleName = useAuthPersistStore((state) => state.roleName);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <UiMenu
      className={s.navbarMenu}
      mode="inline"
      inlineCollapsed={!isMobile && isCollapsed}
      selectedKeys={[pathname]}
      onSelect={(e) => navigate(e.key)}
      onClick={() => isMobile && toggleDrawer()}
      items={
        routes
          .filter((route) => {
            const { key } = route;
            return roleName === 'manager'
              ? key !== '/admin/users' && key !== '/admin/tasks' && key !== '/Users'
              : route;
          })
          .filter((item) => (isCollapsed ? !item.type : item)) as any
      }
    />
  );
};

export { NavbarMenu };
