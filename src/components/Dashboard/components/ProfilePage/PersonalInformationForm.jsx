import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const PersonalInformationForm = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  useEffect(async () => {
    const user = await JSON.parse(localStorage.getItem('user'));
    setUserData(user);
  }, []);

  function renderInfoElement(name, label, value) {
    return (
      <div className="info-container">
        <label htmlFor={name} className="label">{label}</label>
        <input
          type="text"
          name={name}
          id={name}
          value={value || 'N/A'}
          readOnly
          className="input"
        />
      </div>
    );
  }

  return (
    <div className="personal-info-form">
      <div className="head-line">
        <ArrowBackIcon onClick={() => history.goBack()} />
        <div className="title">Personal Info</div>
      </div>
      <form noValidate autoComplete="off" className="form">
        {renderInfoElement('firstName', 'First Name', userData.firstName)}
        {renderInfoElement('lastName', 'Last Name', userData.lastName)}
        {renderInfoElement('email', 'Email Address', userData.email)}
        {renderInfoElement('dob', 'Date of Birth', userData.dateOfBirth)}
        {renderInfoElement('country', 'Country of Residence', userData.countryCode)}
        {renderInfoElement('streetName', 'Street Name', userData.street)}
        {renderInfoElement('streetNo', 'Street Number', userData.streetNo)}
        {renderInfoElement('town', 'Town/City', userData.streetNo)}
        {renderInfoElement('postalCode', 'Postal Code', userData.postalCode)}
        {renderInfoElement('phone', 'Phone', userData.phoneNum)}
      </form>
    </div>
  );
};

export default PersonalInformationForm;
