import React from 'react';
import { Menu, Footer } from '../components';
import { NewPassword } from '../components/onboarding';

export default function NewPasswordPage({ email, entity }) {
  return (
    <div className="changePasswordPage screen-box">
      <Menu entity={entity} />
      <NewPassword email={email} />
      <Footer entity={entity} />
    </div>
  );
}
