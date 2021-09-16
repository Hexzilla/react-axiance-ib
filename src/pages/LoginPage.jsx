import React from 'react';
import { Menu, Footer } from '../components';
import { Login } from '../components/onboarding';

export default function LoginPage({ entity }) {
  return (
    <div className="login screen-box">
      <Menu entity={entity} />
      <Login entity={entity} />
      <Footer entity={entity} />
    </div>
  );
}
