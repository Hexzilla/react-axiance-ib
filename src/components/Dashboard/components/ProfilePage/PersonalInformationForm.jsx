import React from 'react';
import { useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PhoneInput from 'react-phone-number-input';

const PersonalInformationForm = () => {
  const history = useHistory();

  return (
    <div className="personal-info-form">
      <div className="head-line">
        <ArrowBackIcon onClick={() => history.goBack()} />
        <div className="title">Personal Information</div>
      </div>
      <form noValidate autoComplete="off" className="form">
        <TextField id="firstName" label="First name" variant="outlined" />
        <TextField id="lastName" label="Last name" variant="outlined" />
        <TextField id="email" label="Email Address" variant="outlined" />
        <TextField
          id="date"
          label="Date of Birth"
          type="date"
          variant="outlined"
          defaultValue="2017-05-24"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="country" label="Country of Residency" variant="outlined" disabled />
        <TextField id="streetName" label="Street Name" variant="outlined" />
        <TextField id="streetNumber" label="Street Number" variant="outlined" />
        <TextField id="townCity" label="Town/City" variant="outlined" />
        <TextField id="postalCode" label="Postal Code" variant="outlined" />
        <PhoneInput
          placeholder="Phone Number"
          international
          limitMaxLength
          name="phoneNum"
          id="phoneNum"
          required
        />
      </form>
    </div>
  );
};

export default PersonalInformationForm;
