import {
  AdminTasks,
  AdminUsers,
  BotPaymentCards,
  Company,
  Courses,
  Home,
  LeadComments,
  LeadNotifications,
  Leads,
  Links,
  NotFound,
  Orders,
  Profile,
  Sources,
  Tickets,
  UserTasks,
} from 'src/components/screens';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/admin/users', element: <AdminUsers /> },
  { path: '/admin/tasks', element: <AdminTasks /> },
  { path: '/company', element: <Company /> },
  { path: '/courses', element: <Courses /> },
  { path: '/tickets', element: <Tickets /> },
  { path: '/bots/payment-cards', element: <BotPaymentCards /> },
  { path: '/sources', element: <Sources /> },
  { path: '/sources/:id/:title', element: <Links /> },
  { path: '/leads', element: <Leads /> },
  { path: '/leads/:id/:name', element: <LeadComments /> },
  { path: '/leads/notifications', element: <LeadNotifications /> },
  { path: '/user/tasks', element: <UserTasks /> },
  { path: '/orders', element: <Orders /> },
  { path: '/profile', element: <Profile /> },
  { path: '*', element: <NotFound /> },
];

export { routes };
