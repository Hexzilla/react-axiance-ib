import React from 'react';
import { Menu, Footer } from '../components';
import { ChangePassword } from '../components/onboarding';

export default function ChangePasswordPage({ entity }) {
  return (
    <div className="changePasswordPage screen-box">
      <Menu entity={entity} />
      <ChangePassword />
      <Footer entity={entity} />
    </div>
  );
}
