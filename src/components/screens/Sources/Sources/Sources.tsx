import React from 'react';

import { SourcesForm } from './form/SourcesForm';
import { SourcesTable } from './table/SourcesTable';

const Sources: React.FC = () => (
  <>
    <SourcesForm />
    <SourcesTable />
  </>
);

export default Sources;
