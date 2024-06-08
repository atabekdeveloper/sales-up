import React from 'react';

import { LeadsChat } from './chat/LeadsChat';
import { LeadsForm } from './form/LeadsForm';
import { LeadsTable } from './table/LeadsTable';

const Leads: React.FC = () => (
  <>
    <LeadsForm />
    <LeadsTable />
    <LeadsChat />
  </>
);

export default Leads;
