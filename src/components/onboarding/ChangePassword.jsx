import React, { useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CancelIcon from '@material-ui/icons/Cancel';
import { Input, InputAdornment, IconButton } from '@material-ui/core';
import { withRouter, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../styles/ChangePassword.scss';
import { useSnackbar } from 'notistack';
import { userController } from '../../controllers';

function ChangePassword() {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);

  const handleClickShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const closeChangePassword = () => {
    history.push('/dashboard');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await userController.changePassword(password, oldPassword);
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
      return;
    }

    history.push('/dashboard');
    enqueueSnackbar('Your password has been updated', {
      variant: 'success',
    });
  };

  return (
    <div className="change-password">
      <div className="change-password-inner container">
        <CancelIcon className="close-icon" onClick={closeChangePassword} />
        <h2 className="title">{t('changePassword.changePassword')}</h2>
        <form className="change-password-form" onSubmit={onSubmit}>
          <div className="field-group">
            <Input
              type={showOldPassword ? 'text' : 'password'}
              placeholder=" "
              name="oldPassword"
              id="oldPassword"
              value={oldPassword}
              onChange={(val) => setOldPassword(val.target.value)}
              required
              className="password field"
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowOldPassword}>
                    {showOldPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              )}
            />
            <label htmlFor="oldPassword" className="input-label">
              {t('changePassword.oldPassword')}
            </label>
          </div>

          <div className="field-group">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder=" "
              name="password"
              id="password"
              value={password}
              onChange={(val) => setPassword(val.target.value)}
              required
              className="password field"
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              )}
            />
            <label htmlFor="password" className="input-label">
              {t('changePassword.newPassword')}
            </label>
          </div>

          <input type="submit" className="submit" value={t('submit')} />
        </form>
      </div>
    </div>
  );
}

export default withRouter(ChangePassword);
