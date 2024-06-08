import { Drawer } from 'antd';
import clsx from 'clsx';
import React from 'react';
import logo from 'src/assets/images/full_logo.png';
import { useResponsive } from 'src/hooks';
import { useToggleStore } from 'src/store';

import { NavbarMenu } from './NavbarMenu';

import s from './navbar.module.scss';

const Navbar: React.FC = () => {
  const [drawerSize, setDrawerSize] = React.useState(260);

  const { isMobile } = useResponsive(900);

  const { toggleDrawer, isCollapsed, isDrawer } = useToggleStore();

  React.useEffect(() => {
    if (isCollapsed) {
      setDrawerSize(88);
      return;
    }
    setDrawerSize(260);
  }, [isCollapsed]);
  return (
    <Drawer
      className={s.drawer}
      placement="left"
      width={drawerSize}
      onClose={toggleDrawer}
      open={isMobile ? !isDrawer : isDrawer}
      mask={isMobile}
      closable={false}
      zIndex={isMobile ? 600 : 400}
    >
      <nav className={s.navbar}>
        <div className={s.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={clsx(s.menu, isCollapsed && s.active)}>
          <NavbarMenu />
        </div>
      </nav>
    </Drawer>
  );
};

export { Navbar };
