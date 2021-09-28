import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { TextField } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { userController } from '../../../../controllers';

const MyAccountForm = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (password !== passwordConfirm) {
        enqueueSnackbar('Mismatched', { variant: 'error' });
        return;
      }
      await userController.changePassword(password, oldPassword);
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
      return;
    }

    enqueueSnackbar('Your password has been changed', {
      variant: 'success',
    });
  };

  return (
    <div className="my-account-form">
      <div className="head-line">
        <ArrowBackIcon onClick={() => history.goBack()} />
        <div className="title">Personal Information</div>
      </div>
      <div className="sub-title">
        Password Settings
      </div>
      <form noValidate autoComplete="off" className="form" onSubmit={onSubmit}>
        <TextField
          id="currentPassword"
          label="Current Password"
          type="password"
          required
          variant="outlined"
          onChange={(val) => setOldPassword(val.target.value)}
        />
        <TextField
          id="newPassword"
          label="New Password"
          type="password"
          required
          variant="outlined"
          onChange={(val) => setPassword(val.target.value)}
        />
        <TextField
          id="confirmPassword"
          label="Confirm New Password"
          type="password"
          required
          variant="outlined"
          onChange={(val) => setPasswordConfirm(val.target.value)}
        />
        <button type="submit" className="nd-btn">Change</button>
      </form>
    </div>
  );
};

export default MyAccountForm;
