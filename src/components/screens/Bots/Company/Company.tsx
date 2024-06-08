import React from 'react';

import { CompanyForm } from './form/CompanyForm';
import { CompanyTable } from './table/CompanyTable';

const Company: React.FC = () => (
  <>
    <CompanyForm />
    <CompanyTable />
  </>
);

export default Company;
