import React from 'react';
import './profile-page.scss';
import { Link, Route } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PersonalInformationForm from './PersonalInformationForm';
import MyAccountForm from './MyAccountForm';
import CommunicationPreferencesForm from './CommunicationPreferencesForm';
import VerifyForm from './VerifyForm';
import LegalDocuments from './LegalDocuments';

const NavigationCard = ({
  svg, title, description, uncompleted, path,
}) => (
  <Link className="nav-link" to={path}>
    <img className="icon" src={`/assets/dashboard/${svg}.svg`} alt={svg} />
    <div className="text">
      <div className="title">
        {title}
      </div>
      <div className="description">
        {description}
      </div>
    </div>
    <div className="arrow">
      <ArrowForwardIcon />
    </div>
    <div className="content">
      {uncompleted && (
        <div className="status">
          uncompleted
        </div>
      )}
    </div>
  </Link>
);

function ProfilePage() {
  return (
    <div className="profile-page">
      <Route exact path="/dashboard/profile">
        <div className="banner-container">
          <img src="/assets/dashboard/marketing-banner/profile-banner.png" className="banner" alt="banner" />
        </div>

        <div className="link-container">
          <NavigationCard title="Personal Information" description="Provide the necessary details to complete your profile." svg="personal-information-icon" path="profile/personal-information" />
          <NavigationCard title="Change Password" description="Manage your account, edit your credentials and set your security standards." svg="my-account-icon" path="profile/manage" />
          <NavigationCard title="Communication Preferences" description="Set your preferences according your needs" svg="communication-icon" path="profile/communication-preferences" />
          <NavigationCard title="Verification Documents" description="Please add your KYC and identity documentation to verify your account" svg="verification-docs-icon" path="profile/verify" />
          <NavigationCard title="Legal Documents" description="Find all the necessary legal documentation" svg="legal-docs-icon" path="profile/legal-documents" />
        </div>
      </Route>

      <Route path="/dashboard/profile/personal-information" component={PersonalInformationForm} />
      <Route path="/dashboard/profile/manage" component={MyAccountForm} />
      <Route path="/dashboard/profile/communication-preferences" component={CommunicationPreferencesForm} />
      <Route path="/dashboard/profile/verify" component={VerifyForm} />
      <Route path="/dashboard/profile/legal-documents" component={LegalDocuments} />
    </div>
  );
}

export default ProfilePage;
