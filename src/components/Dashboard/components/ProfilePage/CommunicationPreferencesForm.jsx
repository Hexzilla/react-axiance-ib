import React, { useState, useEffect } from 'react';
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
  const [preferences, setPreferences] = useState({
    contactMethod: '',
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
      ...preferences,
      availableDays,
      availableHours: {
        from: availableHours[0],
        to: availableHours[1],
      },
    };
    try {
      await userController.uploadSocials(payload);

      enqueueSnackbar('Communication preferences has been updated', {
        variant: 'success',
      });
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
    }
  };

  useEffect(() => {
    (async () => {
      const { socialData } = await JSON.parse(localStorage.getItem('user'));
      if (socialData) {
        setPreferences(socialData);
      }
      if (socialData?.availableDays) {
        setAvailableDays(socialData.availableDays);
      }
      if (socialData?.availableHours) {
        setAvailableHours([socialData.availableHours.from, socialData.availableHours.to]);
      }
    })();
  }, []);

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
            preferences={preferences}
            setPreferences={setPreferences}
            uploadSocials={uploadSocials}
          />
        </div>
      </form>
    </div>
  );
};

export default CommunicationPreferencesForm;
