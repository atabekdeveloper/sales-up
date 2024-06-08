import loadable from '@loadable/component';

import { TableLoader } from '../shareds';

// Local --- Start
const Home = loadable(() => import('src/components/screens/Home/Home'), {
  fallback: <TableLoader />,
});
const Profile = loadable(() => import('src/components/screens/Profile/Profile'), {
  fallback: <TableLoader />,
});
const NotFound = loadable(() => import('src/components/screens/404/NotFound'), {
  fallback: <TableLoader />,
});
// Local --- End

// Users --- Start
const AdminUsers = loadable(() => import('src/components/screens/Admin/Users/Users'), {
  fallback: <TableLoader />,
});
const AdminTasks = loadable(() => import('src/components/screens/Admin/Tasks/Tasks'), {
  fallback: <TableLoader />,
});
// Users --- Start

// Bots --- Start
const Company = loadable(() => import('src/components/screens/Bots/Company/Company'), {
  fallback: <TableLoader />,
});
const Courses = loadable(() => import('src/components/screens/Bots/Courses/Courses'), {
  fallback: <TableLoader />,
});
const Tickets = loadable(() => import('src/components/screens/Bots/Tickets/Tickets'), {
  fallback: <TableLoader />,
});
const BotPaymentCards = loadable(
  () => import('src/components/screens/Bots/Cards/BotPaymentCards'),
  {
    fallback: <TableLoader />,
  },
);
// Bots --- End

// Sources --- Start
const Sources = loadable(() => import('src/components/screens/Sources/Sources/Sources'), {
  fallback: <TableLoader />,
});
const Links = loadable(() => import('src/components/screens/Sources/Links/Links'), {
  fallback: <TableLoader />,
});
// Sources --- End

// Leads --- Start
const Leads = loadable(() => import('src/components/screens/Leads/Leads/Leads'), {
  fallback: <TableLoader />,
});
const LeadNotifications = loadable(
  () => import('src/components/screens/Leads/Notifications/LeadNotifications'),
  {
    fallback: <TableLoader />,
  },
);
const LeadComments = loadable(() => import('src/components/screens/Leads/Comments/LeadComments'), {
  fallback: <TableLoader />,
});
// Leads --- End

// Leads --- Start
const UserTasks = loadable(() => import('src/components/screens/Tasks/Tasks'), {
  fallback: <TableLoader />,
});
// Leads --- End

// Orders --- Start
const Orders = loadable(() => import('src/components/screens/Orders/Orders'), {
  fallback: <TableLoader />,
});
// Orders --- End

export {
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
};
