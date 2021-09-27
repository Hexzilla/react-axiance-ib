import Cookies from 'universal-cookie';
import { isEmpty } from 'lodash-es';
import { userAPI } from '../api';
import { errorHelper, validationHelper } from '../helpers';
import { clearStorage } from '../utils/util-functions';

const cookies = new Cookies();

async function getUser(uuid) {
  let user;

  try {
    user = await userAPI.getUser(uuid);
    return user;
  } catch (error) {
    throw new errorHelper.CodeError(error.message, error.code);
  }
}

async function login(email, password) {
  let res;

  try {
    res = await userAPI.login(email, password);
  } catch (error) {
    throw new errorHelper.CodeError(error.message, error.code);
  }

  cookies.set('token', res.token, {
    path: '/',
  });
  localStorage.setItem('user', JSON.stringify(res.user));
  localStorage.setItem('isLoggedIn', true);
  localStorage.setItem('nullPointId', JSON.stringify(res.user.nullPointId));
  localStorage.setItem('emailVerified', JSON.stringify(res.user.emailVerified));

  return true;
}

async function register(userData, language, entity) {
  let res;

  try {
    await validationHelper.validatePassword(userData.password, userData.cPassword);
    await validationHelper.validatePhone(userData.phoneNum);
    res = await userAPI.register(userData, language, entity);
  } catch (error) {
    throw new errorHelper.CodeError(error.message, error.code);
  }

  cookies.set('token', res.body.token, { path: '/' });
  localStorage.setItem('user', JSON.stringify(res.body.user));
  localStorage.setItem('isLoggedIn', true);
  localStorage.setItem('emailVerified', false);
  return true;
}

async function checkAuth() {
  let res;

  if (cookies.get('token')) {
    try {
      const token = await cookies.get('token');
      res = await userAPI.checkAuth(token);
    } catch (error) {
      cookies.remove('token', { path: '/' });
      clearStorage();
      throw new errorHelper.CodeError('Token is invalid', 401);
    }

    localStorage.setItem('user', JSON.stringify(res.data.user));
    localStorage.setItem(
      'nullPointId',
      JSON.stringify(res.data.user.nullPointId),
    );
    localStorage.setItem(
      'emailVerified',
      JSON.stringify(res.data.user.emailVerified),
    );
    localStorage.setItem('isLoggedIn', true);
  } else {
    clearStorage();
    throw new errorHelper.CodeError('Token is invalid', 401);
  }
}

async function changePassword(password, oldPassword) {
  const token = cookies.get('token');

  try {
    await validationHelper.validatePassword(password);
    await userAPI.changePassword(password, oldPassword, token);
  } catch (error) {
    throw new errorHelper.CodeError(error.message, error.code);
  }
}

async function resetPasswordCode(email) {
  try {
    await userAPI.resetPasswordCode(email);
  } catch (error) {
    throw new errorHelper.CodeError(error.message, error.code);
  }
}

async function newPassword(email, password, cPassword) {
  let token;

  try {
    await validationHelper.validatePassword(password, cPassword);
    token = await userAPI.getToken();
    await userAPI.updatePassword(email, password, token);
  } catch (error) {
    throw new errorHelper.CodeError(error.message, error.code);
  }
}

async function confirmEmail(uuid, email, pinCode) {
  try {
    await userAPI.support(uuid, email, pinCode);

    localStorage.setItem('emailVerified', true);
  } catch (error) {
    throw new errorHelper.CodeError(error.message, error.code);
  }
}

async function confirmEmailPassword(email, pinCode) {
  try {
    await userAPI.confirmEmailPassword(email, pinCode);
  } catch (error) {
    throw new errorHelper.CodeError(error.message, error.code);
  }
}

async function resendCode(email) {
  try {
    await userAPI.resendCode(email);
  } catch (error) {
    throw new errorHelper.CodeError(error.message, error.code);
  }
}

async function support(supportData) {
  try {
    await userAPI.support(supportData);
  } catch (error) {
    throw new errorHelper.CodeError(error.message, error.code);
  }
}

async function npAutoLogin(uuid, entity) {
  try {
    return await userAPI.npAutoLogin({ uuid, entity });
  } catch (error) {
    throw new errorHelper.CodeError(error.message, error.code);
  }
}

async function getAffiliateDetails(externalId, entity) {
  try {
    const affiliateData = await userAPI.getAffiliateDetails(externalId, entity);
    await localStorage.setItem('affiliateData', JSON.stringify(affiliateData.data.aff_data[0]));
  } catch (error) {
    throw new errorHelper.CodeError(error.message, error.code);
  }
}

async function generateAffiliateUrl(externalId, campaignId, page, entity) {
  let affiliateUrl;

  if (entity === 'fsa') {
    if (page === 'registration') {
      affiliateUrl = `https://client.axiance.com/int/sign-up/live?fxbl=axianceint&fxsrc=np&fxaffid=${externalId}&fxcid=${campaignId}&referral=${externalId}`;
    } else if (page === 'home') {
      affiliateUrl = `https://axiance.com/int/en-us/?fxbl=axianceint&fxsrc=np&fxaffid=${externalId}&fxcid=${campaignId}&referral=${externalId}`;
    }
  } else if (entity === 'cysec') {
    if (page === 'registration') {
      affiliateUrl = `https://client.axianceeu.com/sign-up/live?fxbl=axianceeu&fxsrc=np&fxaffid=${externalId}&fxcid=${campaignId}&referral=${externalId}`;
    }
  }

  if (!affiliateUrl) {
    throw new errorHelper.CodeError('Something went wrong!', 500);
  }

  return affiliateUrl;
}

async function uploadSocials(socialData) {
  if (socialData.contactMethod === 'none') {
    throw new errorHelper.CodeError('You have to select a contact method', 400);
  } else if (
    socialData.contactMethod !== 'email'
    && socialData.contactMethod !== 'phone' && socialData.contactMethod !== 'telegram' && socialData.contactMethod !== 'whatsapp'
      && isEmpty(socialData[socialData.contactMethod])
  ) {
    throw new errorHelper.CodeError('Selected contact method is empty', 400);
  }

  try {
    const localUser = await JSON.parse(localStorage.getItem('user'));
    const { uuid } = localUser;
    const token = cookies.get('token');

    const payload = {
      socialData,
      uuid,
      token,
    };
    await userAPI.uploadSocials(payload);

    const updatedUser = { ...localUser, socialData };
    localStorage.setItem('user', JSON.stringify(updatedUser));
  } catch (error) {
    console.log('error', error);
    throw new errorHelper.CodeError(error.response.data, error.response.status);
  }
}

export default {
  getUser,
  login,
  register,
  checkAuth,
  changePassword,
  resetPasswordCode,
  newPassword,
  confirmEmail,
  confirmEmailPassword,
  resendCode,
  support,
  npAutoLogin,
  getAffiliateDetails,
  generateAffiliateUrl,
  uploadSocials,
};
