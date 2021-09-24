import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';
import AvailabilityComponent from './CommuncationPreferences/AvailabilityComponent';
import SocialMediaComponent from './CommuncationPreferences/SocialMediaComponent';

const CommunicationPreferencesForm = () => {
  const history = useHistory();

  return (
    <div className="com-preferences">
      <div className="head-line">
        <ArrowBackIcon onClick={() => history.goBack()} />
        <div className="title">Communication Preferences</div>
      </div>
      <div className="sub-title">
        Tell us when, how and why you wish to be contacted by our team.
      </div>

      <form className="com-form">
        <AvailabilityComponent />
        <div className="section switch-list">
          <h4>Preferred Communication Channel</h4>

          <SocialMediaComponent />
        </div>

      </form>
    </div>
  );
};

export default CommunicationPreferencesForm;
