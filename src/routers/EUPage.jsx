import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  ChangePasswordPage,
  DashboardPage,
  EmbedPage,
  LandingPage,
  LoginPage,
  NewPasswordPage,
  RegisterPage,
  ResetPasswordPage,
  VerifyEmailPage,
  VerifyNewEmailPage,
  VerifyEmailPasswordPage,
  CreatePasswordPage,
  SignOutPage,
} from '../pages';
import { RiskWarning } from '../components/landingPage';

const entity = 'cysec';

const EuPage = () => (
  <>
    <RiskWarning entity={entity} />
    <Switch>
      <Route path="/" exact component={() => <LandingPage entity={entity} />} />
      <Route
        path="/login"
        exact
        component={() => <LoginPage entity={entity} />}
      />
      <Route
        path="/register"
        exact
        component={() => <RegisterPage entity={entity} />}
      />
      <Route
        path="/dashboard"
        exact
        component={() => <DashboardPage entity={entity} />}
      />
      <Route
        path="/portal"
        exact
        component={() => <EmbedPage entity={entity} />}
      />
      <Route
        path="/change-password"
        exact
        component={() => <ChangePasswordPage entity={entity} />}
      />
      <Route
        path="/verify-email"
        exact
        component={() => <VerifyEmailPage entity={entity} />}
      />
      <Route
        path="/verify-new-email/:uuid"
        exact
        component={() => <VerifyNewEmailPage entity={entity} />}
      />
      <Route
        path="/password-reset"
        exact
        component={() => <ResetPasswordPage entity={entity} />}
      />
      <Route
        path="/create-password"
        exact
        component={() => <CreatePasswordPage entity={entity} />}
      />
      <Route
        path="/verify-email-password"
        exact
        component={() => <VerifyEmailPasswordPage entity={entity} />}
      />
      <Route
        path="/new-password"
        exact
        component={() => <NewPasswordPage entity={entity} />}
      />
      <Route
        path="/sign-out"
        exact
        component={() => <SignOutPage entity={entity} />}
      />
    </Switch>
  </>
);

export default EuPage;
