import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import '../../styles/SocialMedia.scss';
import { useTranslation } from 'react-i18next';
import {
  FaSkype,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from 'react-icons/fa';
import { userController } from '../../../../../controllers';

export default function SocialMediaComponent() {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [selectedCommunication, setSelectedCommunication] = useState('');
  const [communicationPref, setCommunicationPref] = useState({
    facebook: '',
    linkedin: '',
    instagram: '',
    skype: '',
    phoneNumber: '',
    email: '',
  });

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setCommunicationPref((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const uploadSocials = async (e) => {
    e.preventDefault();

    try {
      await userController.uploadSocials(communicationPref);
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
    }
  };

  useEffect(() => {
    (async () => {
      const localUser = await JSON.parse(localStorage.getItem('user'));
      setCommunicationPref({
        facebook: localUser.socialData.facebook,
        linkedin: localUser.socialData.linkedin,
        instagram: localUser.socialData.instagram,
        skype: localUser.socialData.skype,
        phoneNumber: localUser.phoneNum,
        email: localUser.email,
      });
    })();
  }, []);

  return (
    <div className="socials-container-component">
      <form
        className="comm-options-form"
        onSubmit={(e) => {
          uploadSocials(e);
        }}
      >
        <div className="half-width-div">
          <div className="social-input-box">
            <input
              type="radio"
              id="facebook"
              name="facebook"
              value="Facebook"
              checked={selectedCommunication === 'Facebook'}
              onChange={(e) => setSelectedCommunication(e.target.value)}
              className="radio-button"
            />
            <div className="field-group">

              <input
                type="text"
                placeholder=" "
                id="facebook"
                name="facebook"
                value={communicationPref.facebook}
                onChange={handleSocialChange}
                className="field"
              />
              <label htmlFor="facebook" className="input-label">
                <FaFacebookF className="social-icon" />
                Facebook
              </label>
            </div>
          </div>
          <div className="social-input-box">
            <input
              type="radio"
              id="linkedIn"
              name="linkedIn"
              value="Linkedin"
              checked={selectedCommunication === 'Linkedin'}
              onChange={(e) => setSelectedCommunication(e.target.value)}
              className="radio-button"
            />
            <div className="field-group">
              <input
                type="text"
                placeholder=" "
                name="linkedin"
                id="linkedin"
                value={communicationPref.linkedin}
                onChange={handleSocialChange}
                className="field"
              />
              <label htmlFor="linkedin" className="input-label">
                <FaLinkedinIn className="social-icon" />
                LinkedIn
              </label>
            </div>
          </div>
          <div className="social-input-box">
            <input
              type="radio"
              id="instagram"
              name="instagram"
              value="Instagram"
              checked={selectedCommunication === 'Instagram'}
              onChange={(e) => setSelectedCommunication(e.target.value)}
              className="radio-button"
            />
            <div className="field-group">
              <input
                type="text"
                placeholder=" "
                name="instagram"
                id="instagram"
                value={communicationPref.instagram}
                onChange={handleSocialChange}
                className="field"
              />
              <label htmlFor="instagram" className="input-label">
                <FaInstagram className="social-icon" />
                Instagram
              </label>
            </div>
          </div>
        </div>
        <div className="half-width-div">
          <div className="social-input-box">
            <input
              type="radio"
              id="skype"
              name="skype"
              value="Skype"
              checked={selectedCommunication === 'Skype'}
              onChange={(e) => setSelectedCommunication(e.target.value)}
              className="radio-button"
            />
            <div className="field-group">
              <input
                type="text"
                placeholder=" "
                name="skype"
                id="skype"
                value={communicationPref.skype}
                onChange={handleSocialChange}
                className="field"
              />
              <label htmlFor="skype" className="input-label">
                <FaSkype className="social-icon" />
                Skype
              </label>
            </div>
          </div>
          <div className="social-input-box">
            <input
              type="radio"
              id="email"
              name="email"
              value="Email"
              checked={selectedCommunication === 'Email'}
              onChange={(e) => setSelectedCommunication(e.target.value)}
              className="radio-button"
            />
            <div className="field-group">
              <input
                type="text"
                placeholder=" "
                name="email"
                id="email"
                value={communicationPref.email}
                onChange={handleSocialChange}
                className="field"
              />
              <label htmlFor="skype" className="input-label">
                <FaSkype className="social-icon" />
                E-mail
              </label>
            </div>
          </div>
          <div className="social-input-box">
            <input
              type="radio"
              id="phone"
              name="phone"
              value="Phone"
              checked={selectedCommunication === 'Phone'}
              onChange={(e) => setSelectedCommunication(e.target.value)}
              className="radio-button"
            />
            <div className="field-group">
              <input
                type="text"
                placeholder=" "
                name="phone"
                id="phone"
                value={communicationPref.phoneNumber}
                onChange={handleSocialChange}
                className="field"
              />
              <label htmlFor="skype" className="input-label">
                <FaSkype className="social-icon" />
                Phone Number
              </label>
            </div>
          </div>
        </div>
        <input
          type="submit"
          className="submit green-cta"
          value={t('save')}
        />
      </form>
    </div>
  );
}
