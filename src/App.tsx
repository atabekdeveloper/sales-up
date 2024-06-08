import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from 'src/components/layout/Layout';
import { AuthLogin } from 'src/components/screens/Auth/AuthLogin';
import { routes } from 'src/routes';

import { Guest } from './components/screens/Guest/Guest';
import { useAuthPersistStore } from './store';

import 'src/assets/styles/App.scss';

const App: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const token = useAuthPersistStore((state) => state.accessToken);
  const roleName = useAuthPersistStore((state) => state.roleName);

  React.useEffect(() => {
    if (token && pathname === '/login') {
      navigate('/');
    }
  }, [navigate, pathname, token]);
  return (
    <Routes>
      <Route path="/login" element={<AuthLogin />} />
      <Route path="/guest/:uuid" element={<Guest />} />
      <Route path="/" element={<Layout />}>
        {routes
          .filter((route) => (roleName === 'manager' ? route.path !== '/admin/users' : route))
          .map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
      </Route>
    </Routes>
  );
};

export { App };
