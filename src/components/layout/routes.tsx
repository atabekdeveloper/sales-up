import { FaTasks } from 'react-icons/fa';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoBookmarksOutline, IoCardOutline, IoShareSocialOutline } from 'react-icons/io5';
import { LuTicket } from 'react-icons/lu';
import { PiUsers, PiUsersThreeLight } from 'react-icons/pi';
import { TbShoppingCart } from 'react-icons/tb';

export const routes = [
  {
    key: '/Users',
    label: 'Users',
    type: 'group',
  },
  {
    key: '/admin/users',
    label: 'Пользователи',
    icon: <PiUsers />,
  },
  {
    key: '/admin/tasks',
    label: 'Задание',
    icon: <FaTasks />,
  },
  {
    label: 'Bots',
    type: 'group',
  },
  {
    key: '/company',
    label: 'Компания',
    icon: <HiOutlineBuildingOffice2 />,
  },
  {
    key: '/courses',
    label: 'Курсы',
    icon: <IoBookmarksOutline />,
  },
  {
    key: '/tickets',
    label: 'Билеты',
    icon: <LuTicket />,
  },
  {
    key: '/bots/payment-cards',
    label: 'Карты',
    icon: <IoCardOutline />,
  },
  // {
  //   label: 'Sources',
  //   type: 'group',
  // },
  // {
  //   key: '/sources',
  //   label: 'Сети',
  //   icon: <IoShareSocialOutline />,
  // },
  {
    label: 'Leads',
    type: 'group',
  },
  {
    key: '/leads',
    label: 'Клиенты',
    icon: <PiUsersThreeLight />,
  },
  {
    key: '/leads/notifications',
    label: 'Уведомление',
    icon: <IoMdNotificationsOutline />,
  },
  {
    label: 'Tasks',
    type: 'group',
  },
  {
    key: '/user/tasks',
    label: 'Задание',
    icon: <FaTasks />,
  },
  {
    label: 'Orders',
    type: 'group',
  },
  {
    key: '/orders',
    label: 'Заказы',
    icon: <TbShoppingCart />,
  },
];
