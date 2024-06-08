import React from 'react';

import { LeadCommentsForm } from './form/LeadCommentsForm';
import { LeadCommentsTable } from './table/LeadCommentsTable';

const LeadComments: React.FC = () => (
  <>
    <LeadCommentsForm />
    <LeadCommentsTable />
  </>
);

export default LeadComments;
