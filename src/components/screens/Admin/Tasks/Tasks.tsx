import React from 'react';

import { AdminTasksForm } from './form/TasksForm';
import { AdminTasksTable } from './table/TasksTable';

const AdminTasks: React.FC = () => (
  <>
    <AdminTasksForm />
    <AdminTasksTable />
  </>
);

export default AdminTasks;
