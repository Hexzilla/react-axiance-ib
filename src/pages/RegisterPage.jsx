import React from 'react';
import { Menu, Footer } from '../components';
import { Register } from '../components/onboarding';

export default function RegisterPage({ entity }) {
  return (
    <div className="registerPage screen-box">
      <Menu entity={entity} />
      <Register entity={entity} />
      <Footer entity={entity} />
    </div>
  );
}
