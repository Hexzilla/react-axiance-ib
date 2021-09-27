import React, { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { userController } from '../../../../controllers';

const AvailabilityComponent = React.lazy(() => import('./CommuncationPreferences/AvailabilityComponent'));
const SocialMediaComponent = React.lazy(() => import('./CommuncationPreferences/SocialMediaComponent'));

const CommunicationPreferencesForm = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const [availableDays, setAvailableDays] = useState({});
  const [availableHours, setAvailableHours] = useState([7, 20]);
  const [communicationPref, setCommunicationPref] = useState({
    facebook: '',
    linkedin: '',
    instagram: '',
    skype: '',
    phoneNumber: '',
    email: '',
  });

  const uploadSocials = async (e) => {
    e.preventDefault();
    const payload = {
      ...communicationPref,
      availableDays,
      availableHours: {
        from: availableHours[0],
        to: availableHours[1],
      },
    };
    try {
      await userController.uploadSocials(payload);
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
    }
  };

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
        <AvailabilityComponent
          availableDays={availableDays}
          setAvailableDays={setAvailableDays}
          availableHours={availableHours}
          setAvailableHours={setAvailableHours}
        />
        <div className="section switch-list">
          <h4>Preferred Communication Channel</h4>
          <SocialMediaComponent
            communicationPref={communicationPref}
            setCommunicationPref={setCommunicationPref}
            uploadSocials={uploadSocials}
          />
        </div>
      </form>
    </div>
  );
};

export default CommunicationPreferencesForm;
