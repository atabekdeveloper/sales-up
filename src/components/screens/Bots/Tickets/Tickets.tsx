import React from 'react';

import { TicketsForm } from './form/TicketsForm';
import { TicketsTable } from './table/TicketsTable';

const Tickets: React.FC = () => (
  <>
    <TicketsForm />
    <TicketsTable />
  </>
);

export default Tickets;
