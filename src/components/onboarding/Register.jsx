import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { CountryDropdown } from 'react-country-region-selector';
import { withRouter, Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Input, IconButton, InputAdornment } from '@material-ui/core';
import { VisibilityOff, Visibility } from '@material-ui/icons';
import '../../styles/Register.scss';
import WHITE_LISTED_COUNTRY_LIST from '../../utils/WhiteListedCountries';
import { userController } from '../../controllers';
import { routerHelper } from '../../helpers';

function Register({ entity }) {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [phoneCountryCode, setPhoneCountryCode] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const history = useHistory();
  const { i18n } = useTranslation();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cPassword: '',
    phoneNum: '',
    countryCode: '',
    phoneCountryCode: '',
  });

  useEffect(async () => {
    window.scrollTo(0, 0);
    const reroute = await routerHelper.reroute();
    if (reroute !== null) {
      history.push(reroute);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowCPassword = () => {
    setShowCPassword(!showCPassword);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    try {
      await userController.register(userData, i18n.language, entity);
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
    }

    setSubmitLoading(false);
    history.push('/verify-email');
  };

  return (
    <div className="register">
      <div className="register-inner container">
        <h2 className="title">
          {' '}
          {t('register.signUp')}
        </h2>
        <p>
          {t('register.gotAccount')}
          <br />
          <Link to="/login" className="sign-in-link">
            {t('login.signin')}
          </Link>
        </p>
        <form className="register-form" onSubmit={onSubmit}>
          <div className="split-field">
            <div className="field-group">
              <input
                type="text"
                placeholder=" "
                name="firstName"
                id="firstName"
                value={userData.firstName || ''}
                onChange={handleChange}
                required
                className="firstName field"
              />
              <label htmlFor="firstName" className="input-label">
                {t('register.fistName')}
              </label>
            </div>

            <div className="field-group">
              <input
                type="text"
                placeholder=" "
                name="lastName"
                id="lastName"
                value={userData.lastName}
                onChange={handleChange}
                required
                className="lastName field"
              />
              <label htmlFor="lastName" className="input-label">
                {t('register.lastName')}
              </label>
            </div>
          </div>
          <div className="field-group">
            <input
              type="email"
              placeholder=" "
              name="email"
              id="email"
              value={userData.email}
              onChange={handleChange}
              required
              className="email field"
            />
            <label htmlFor="email" className="input-label">
              {t('login.email')}
            </label>
          </div>
          <div className="field-group">
            <CountryDropdown
              value={userData.countryCode}
              defaultOptionLabel=""
              name="countryCode"
              onChange={(countryCode) => {
                setUserData((prevState) => ({
                  ...prevState,
                  countryCode,
                }));
                setPhoneCountryCode(countryCode);
              }}
              valueType="short"
              className="country field"
              id="country"
              required
              whitelist={WHITE_LISTED_COUNTRY_LIST}
            />
            <label htmlFor="country" className="country-input-label">
              {t('register.country')}
            </label>
          </div>
          <div className="field-group phone-group">
            <RiArrowDownSLine />
            <PhoneInput
              defaultCountry={phoneCountryCode}
              placeholder="Phone Number"
              name="phoneNum"
              value={userData.phoneNum}
              international
              limitMaxLength
              id="phoneNum"
              required
              onChange={(phoneNum) => {
                setUserData((prevState) => ({
                  ...prevState,
                  phoneNum,
                }));
              }}
            />
          </div>
          <div className="field-group">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder=" "
              name="password"
              id="password"
              value={userData.password}
              onChange={handleChange}
              required
              className="password field"
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )}
            />
            <label htmlFor="password" className="input-label">
              {t('login.password')}
            </label>
          </div>
          <div className="field-group">
            <Input
              type={showCPassword ? 'text' : 'password'}
              placeholder=" "
              name="cPassword"
              id="cPassword"
              value={userData.cPassword}
              onChange={handleChange}
              required
              className="password field"
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowCPassword}>
                    {showCPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )}
            />
            <label htmlFor="cPassword" className="input-label">
              {t('newPassword.confirmPassword')}
            </label>
          </div>
          <input
            type="submit"
            className="submit"
            disabled={!submitLoading}
            value={t('register.createAccount')}
          />
        </form>
      </div>
    </div>
  );
}

export default withRouter(Register);
