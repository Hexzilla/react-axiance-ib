import React from 'react';
import '../../styles/SocialMedia.scss';
import { useTranslation } from 'react-i18next';
import {
  FaSkype,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from 'react-icons/fa';

export default function SocialMediaComponent({
  preferences,
  setPreferences,
  uploadSocials,
}) {
  const { t } = useTranslation();
  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prevState) => ({
      ...prevState,
      contactMethod: name,
      [name]: value,
    }));
  };

  const setSelectedCommunication = (value) => {
    setPreferences((prevState) => ({
      ...prevState,
      contactMethod: value,
    }));
  };

  return (
    <div className="socials-container-component">
      <div className="comm-options-form">
        <div className="half-width-div">
          <div className="social-input-box">
            <input
              type="radio"
              id="facebook"
              name="facebook"
              value="facebook"
              checked={preferences.contactMethod === 'facebook'}
              onChange={(e) => setSelectedCommunication(e.target.value)}
              className="radio-button"
            />
            <div className="field-group">

              <input
                type="text"
                placeholder=" "
                id="facebook"
                name="facebook"
                value={preferences.facebook}
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
              value="linkedin"
              checked={preferences.contactMethod === 'linkedin'}
              onChange={(e) => setSelectedCommunication(e.target.value)}
              className="radio-button"
            />
            <div className="field-group">
              <input
                type="text"
                placeholder=" "
                name="linkedin"
                id="linkedin"
                value={preferences.linkedin}
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
              value="instagram"
              checked={preferences.contactMethod === 'instagram'}
              onChange={(e) => setSelectedCommunication(e.target.value)}
              className="radio-button"
            />
            <div className="field-group">
              <input
                type="text"
                placeholder=" "
                name="instagram"
                id="instagram"
                value={preferences.instagram}
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
              value="skype"
              checked={preferences.contactMethod === 'skype'}
              onChange={(e) => setSelectedCommunication(e.target.value)}
              className="radio-button"
            />
            <div className="field-group">
              <input
                type="text"
                placeholder=" "
                name="skype"
                id="skype"
                value={preferences.skype}
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
              value="email"
              checked={preferences.contactMethod === 'email'}
              onChange={(e) => setSelectedCommunication(e.target.value)}
              className="radio-button"
            />
            <div className="field-group">
              <input
                type="text"
                placeholder=" "
                name="email"
                id="email"
                value={preferences.email}
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
              value="phone"
              checked={preferences.contactMethod === 'phone'}
              onChange={(e) => setSelectedCommunication(e.target.value)}
              className="radio-button"
            />
            <div className="field-group">
              <input
                type="text"
                placeholder=" "
                name="phone"
                id="phone"
                value={preferences.phoneNumber}
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
          onClick={uploadSocials}
        />
      </div>
    </div>
  );
}
