import axios from 'axios';
import { errorHelper } from '../helpers';

const backendURL = process.env.REACT_APP_BACKEND_URL;
const secret = process.env.REACT_APP_USER_TOKEN;

const instance = axios.create({
  baseURL: backendURL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

const headlessInstance = axios.create({
  baseURL: backendURL,
  withCredentials: true,
});

async function getToken() {
  let token;

  try {
    token = await headlessInstance.get('/users/get-token', {
      params: { secret },
    });
    return token.data;
  } catch (error) {
    throw new errorHelper.CodeError(error.response.data, error.response.status);
  }
}

async function getUser(uuid) {
  try {
    const user = await headlessInstance.get('/users/get-user', {
      params: { uuid },
    });
    return user.data;
  } catch (error) {
    throw new errorHelper.CodeError(error.response.data, error.response.status);
  }
}

async function login(email, password) {
  try {
    const user = await instance.post(
      '/users/login',
      JSON.stringify({ email, password }),
    );
    return user.data;
  } catch (error) {
    throw new errorHelper.CodeError(error.response.data, error.response.status);
  }
}

async function register(userData, language, entity) {
  try {
    const user = await instance.post(
      '/users/register',
      JSON.stringify({
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        phoneNum: userData.phoneNum,
        password: userData.password,
        countryCode: userData.countryCode,
        language,
        entity,
      }),
    );
    return user.data;
  } catch (error) {
    throw new errorHelper.CodeError(error.response.data, error.response.status);
  }
}

async function checkAuth(token) {
  try {
    const tokenCheck = await headlessInstance.get('/users/authenticate', {
      params: { token },
    });
    return tokenCheck;
  } catch (error) {
    throw new errorHelper.CodeError(error.response.data, error.response.status);
  }
}

async function changePassword(password, oldPassword, token) {
  try {
    await instance.post(
      '/users/change-password',
      JSON.stringify({
        token,
        password,
        oldPassword,
      }),
    );
  } catch (error) {
    throw new errorHelper.CodeError(error.response.data, error.response.status);
  }
}

async function resetPasswordCode(email) {
  try {
    await instance.post(
      '/users/reset-password-code',
      JSON.stringify({ email }),
    );
  } catch (error) {
    throw new errorHelper.CodeError(error.response.data, error.response.status);
  }
}

async function updatePassword(email, password, token) {
  try {
    await instance.put(
      '/users/update-pass',
      JSON.stringify({
        email,
        updateData: {
          password,
        },
        token,
      }),
    );
  } catch (error) {
    throw new errorHelper.CodeError(error.response.data, error.response.status);
  }
}

async function confirmEmail(uuid, email, pinCode) {
  try {
    await instance.post('/users/confirm-email', JSON.stringify(uuid, email, pinCode));
  } catch (error) {
    throw new errorHelper.CodeError(error.response.data, error.response.status);
  }
}

async function confirmEmailPassword(email, pinCode) {
  try {
    await instance.post('/users/confirm-email-password', JSON.stringify(email, pinCode));
  } catch (error) {
    throw new errorHelper.CodeError(error.response.data, error.response.status);
  }
}

async function resendCode(email) {
  try {
    await instance.post('/sf/resend-code', JSON.stringify(email));
  } catch (error) {
    throw new errorHelper.CodeError(error.response.data, error.response.status);
  }
}

async function support(supportData) {
  try {
    const supportInfo = await instance.post(
      '/users/support',
      JSON.stringify(supportData),
    );
    return supportInfo.data;
  } catch (error) {
    throw new errorHelper.CodeError(error.response.data, error.response.status);
  }
}

async function npGenerate(npData) {
  try {
    await instance.post('/nullpoint/generate', JSON.stringify({ userData: npData }));
  } catch (error) {
    throw new errorHelper.CodeError(error.response.data, error.response.status);
  }
}

async function uploadSocials(socialData) {
  try {
    await instance.put('/users/update-socials', JSON.stringify(socialData));
  } catch (error) {
    throw new errorHelper.CodeError(error.response.data, error.response.status);
  }
}

export default {
  getToken,
  getUser,
  login,
  register,
  checkAuth,
  changePassword,
  resetPasswordCode,
  updatePassword,
  confirmEmail,
  confirmEmailPassword,
  resendCode,
  support,
  npGenerate,
  uploadSocials,
};
