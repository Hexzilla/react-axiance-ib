import React from 'react';
import { Menu, Footer } from '../components';
import { VerifyEmailPassword } from '../components/onboarding';

export default function VerifyEmailPasswordPage({ entity }) {
  return (
    <div className="registerPage screen-box">
      <Menu entity={entity} />
      <VerifyEmailPassword />
      <Footer entity={entity} />
    </div>
  );
}
