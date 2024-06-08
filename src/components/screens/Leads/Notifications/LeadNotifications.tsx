import React from 'react';

import { LeadNotificationsForm } from './form/LeadNotificationsForm';
import { LeadNotificationsTable } from './table/LeadNotificationsTable';

const LeadNotifications: React.FC = () => (
  <>
    <LeadNotificationsForm />
    <LeadNotificationsTable />
  </>
);

export default LeadNotifications;
