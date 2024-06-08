import React from 'react';

import { AdminUsersForm } from './form/UsersForm';
import { AdminUsersTable } from './table/UsersTable';

const AdminUsers: React.FC = () => (
  <>
    <AdminUsersForm />
    <AdminUsersTable />
  </>
);

export default AdminUsers;
