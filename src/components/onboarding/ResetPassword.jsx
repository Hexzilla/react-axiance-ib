import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../styles/Onboarding/Login.scss';
import { userController } from '../../controllers';

export default function ResetPassword() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await userController.resetPasswordCode(email);
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
      return;
    }

    enqueueSnackbar('Verification code has been sent', {
      variant: 'success',
    });

    history.push({
      pathname: '/verify-email-password',
      state: { email },
    });
  };

  return (
    <div className="login">
      <div className="login-inner container">
        <h2 className="title">{t('resetPassword.forgotPassword')}</h2>
        <p className="subtitle">
          {t('resetPassword.enterEmail')}
          <br />
          {t('resetPassword.recoverPassword')}
        </p>
        <form className="login-form" onSubmit={onSubmit}>
          <div className="field-group">
            <input
              id="email"
              type="email"
              name="email"
              placeholder=" "
              value={email}
              onChange={(val) => setEmail(val.target.value)}
              required
              className="email field"
            />
            <label htmlFor="email" className="input-label">
              {t('login.email')}
            </label>
          </div>
          <input
            type="submit"
            className="submit"
            value={t('resetPassword.reset')}
          />
        </form>
      </div>
    </div>
  );
}
