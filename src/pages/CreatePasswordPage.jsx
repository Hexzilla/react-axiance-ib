import React from 'react';
import { Menu, Footer } from '../components';
import { CreatePassword } from '../components/onboarding';

export default function CreatePasswordPage({ entity }) {
  return (
    <div className="changePasswordPage screen-box">
      <Menu entity={entity} />
      <CreatePassword />
      <Footer entity={entity} />
    </div>
  );
}
