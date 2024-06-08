import React from 'react';

import { CoursesForm } from './form/CoursesForm';
import { CoursesTable } from './table/CoursesTable';

const Courses: React.FC = () => (
  <>
    <CoursesForm />
    <CoursesTable />
  </>
);

export default Courses;
