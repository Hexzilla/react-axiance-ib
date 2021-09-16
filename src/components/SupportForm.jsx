import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import CancelIcon from '@material-ui/icons/Cancel';
import '../styles/SupportForm.scss';
import 'react-phone-number-input/style.css';
import { userController } from '../controllers';

export default function SupportForm({ showPopup, closeForm, entity }) {
  const { enqueueSnackbar } = useSnackbar();
  const { i18n, t } = useTranslation();
  const [supportData, setSupportData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    message: '',
    language: i18n.language,
    entity,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupportData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await userController.support(supportData);
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
    }

    enqueueSnackbar('Your message has been sent', {
      variant: 'success',
    });
    setSupportData({
      email: '',
      firstName: '',
      lastName: '',
      message: '',
      language: i18n.language,
      entity,
    });
    closeForm();
  };

  return (
    <div className={showPopup ? 'support' : 'support hide-support'}>
      <div className="support-inner container">
        <CancelIcon className="close-icon" onClick={closeForm} />
        <h2 className="title">{t('supportForm.title')}</h2>
        <p className="subtitle">{t('supportForm.subTitle')}</p>
        <form className="support-form" onSubmit={onSubmit}>
          <div className="split-field">
            <div className="field-group">
              <input
                type="text"
                placeholder=" "
                name="firstName"
                id="firstName"
                value={supportData.firstName}
                onChange={handleChange}
                required
                className="firstName field"
              />
              <label htmlFor="firstName" className="input-label">{t('supportForm.firstName')}</label>
            </div>

            <div className="field-group">
              <input
                type="text"
                placeholder=" "
                name="lastName"
                id="lastName"
                value={supportData.lastName}
                onChange={handleChange}
                required
                className="lastName field"
              />
              <label htmlFor="lastName" className="input-label">{t('supportForm.lastName')}</label>
            </div>
          </div>

          <div className="field-group">
            <input
              type="email"
              placeholder=" "
              name="email"
              id="supportEmail"
              value={supportData.email}
              onChange={handleChange}
              required
              className="email field"
            />
            <label htmlFor="supportEmail" className="input-label">{t('supportForm.email')}</label>
          </div>

          <div className="field-group">
            <textarea
              placeholder=" "
              name="message"
              id="message"
              value={supportData.message}
              onChange={handleChange}
              required
              className="message field"
              rows={4}
            />
            <label htmlFor="message" className="input-label">{t('supportForm.message')}</label>
          </div>

          <input type="submit" className="submit" value={t('submit')} />
        </form>
      </div>
    </div>
  );
}
