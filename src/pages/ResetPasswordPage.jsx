import React from 'react';
import { Menu, Footer } from '../components';
import { ResetPassword } from '../components/onboarding';

export default function ResetPasswordPage({ entity }) {
  return (
    <div className="changePasswordPage screen-box">
      <Menu entity={entity} />
      <ResetPassword />
      <Footer entity={entity} />
    </div>
  );
}
