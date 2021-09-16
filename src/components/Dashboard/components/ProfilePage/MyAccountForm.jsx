import React from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { TextField } from '@material-ui/core';

const MyAccountForm = () => {
  const history = useHistory();

  return (
    <div className="my-account-form">
      <div className="head-line">
        <ArrowBackIcon onClick={() => history.goBack()} />
        <div className="title">Personal Information</div>
      </div>
      <div className="sub-title">
        Password Settings
      </div>
      <form noValidate autoComplete="off" className="form">
        <TextField id="currentPassword" label="Current Password" required variant="outlined" />
        <TextField id="newPassword" label="New Password" required variant="outlined" />
        <TextField id="confirmPassword" label="Confirm New Password" required variant="outlined" />

        <button type="submit" className="nd-btn">Change</button>
      </form>
    </div>
  );
};

export default MyAccountForm;
