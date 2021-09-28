import React from 'react';
import { useHistory } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckIcon from '@material-ui/icons/Check';
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import { useSnackbar } from 'notistack';

const GreenCheckIcon = styled(CheckIcon)({
  color: '#50B848',
  fontSize: '16px',
  marginRight: '6px',
});

const GreenRadio = styled(Radio)({
  color: 'grey',
  '&.Mui-checked': {
    color: '#50B848',
  },
});

const VerifyForm = () => {
  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="verify-identity-form">
      <div className="head-line">
        <ArrowBackIcon onClick={() => history.goBack()} />
        <div className="title">Upload your documents</div>
      </div>
      <div className="sub-title">
        Please provide your Personal ID and Proof of Residence documents
      </div>
      <form noValidate autoComplete="off" className="identity-form" onSubmit={onSubmit}>
        <div className="section">
          <img src="/assets/dashboard/verify-identity.svg" alt="exclamation" />
          <div className="title">
            Verify Identity
          </div>
          <div className="approved">
            Approved
          </div>
        </div>
        <div className="make-sure">
          Make sure the following are included:
        </div>
        <div className="check-list">
          <div className="column">
            <div className="option">
              <GreenCheckIcon />
              Photo
            </div>
            <div className="option">
              <GreenCheckIcon />
              Full name
            </div>
          </div>
          <div className="column">
            <div className="option">
              <GreenCheckIcon />
              Valid expiration date
            </div>
            <div className="option">
              <GreenCheckIcon />
              Official ID – document number
            </div>
          </div>
        </div>
        <div className="passport-options">
          <RadioGroup
            aria-label="gender"
            name="controlled-radio-buttons-group"
          >
            <FormControlLabel value="id" control={<GreenRadio />} label="ID" />
            <FormControlLabel value="passport" control={<GreenRadio />} label="Passport" />
            <FormControlLabel value="license" control={<GreenRadio />} label="Driving License" />
          </RadioGroup>
        </div>
        <button type="submit" className="nd-btn" disabled>Submit</button>
      </form>
    </div>
  );
};

export default VerifyForm;
