import { Space, Tooltip } from 'antd';
import React from 'react';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import screenfull from 'screenfull';
import logo from 'src/assets/images/full_logo.png';
import { useResponsive } from 'src/hooks';
import { useToggleStore } from 'src/store';

import { HeaderSetting } from './HeaderSetting';

import s from './header.module.scss';

const Header: React.FC = () => {
  const { isMobile } = useResponsive(900);
  const { toggleDrawer, toggleCollapsed } = useToggleStore();
  const onToggleDrawer = () => {
    if (isMobile) {
      toggleDrawer();
      return;
    }
    toggleCollapsed();
  };
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <div className={s.box}>
          <img src={logo} alt="Logo" />
        </div>
        <button className={s.burger} onClick={onToggleDrawer} aria-label="Burger">
          <RxHamburgerMenu />
        </button>
      </div>
      <div className={s.right}>
        <Space>
          <Tooltip placement="bottom" title="Fullscreen" zIndex={1500}>
            <button
              className={s.fullscreen}
              onClick={() => screenfull.toggle()}
              aria-label="fullscreen"
            >
              <BsArrowsFullscreen />
            </button>
          </Tooltip>
          <HeaderSetting />
        </Space>
      </div>
    </header>
  );
};

export { Header };
