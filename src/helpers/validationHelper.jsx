import { isPossiblePhoneNumber } from 'react-phone-number-input';
import errorHelper from './errorHelper';

const passwordValidator = /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/;

async function validatePassword(password, cPassword) {
  function hasLowerCase(str) {
    return str.toUpperCase() !== str;
  }

  function hasUpperCase(str) {
    return str.toLowerCase() !== str;
  }

  if (password.length < 8) {
    throw new errorHelper.CodeError(
      'Password must be at least 8 characters long',
      406,
    );
  } else if (!hasUpperCase(password)) {
    throw new errorHelper.CodeError(
      'Password must contain at least 1 uppercase letter',
      406,
    );
  } else if (!hasLowerCase(password)) {
    throw new errorHelper.CodeError(
      'Password must contain at least 1 lowercase letter',
      406,
    );
  } else if (!passwordValidator.test(password)) {
    throw new errorHelper.CodeError(
      'Password must contain at least 1 special character',
      406,
    );
  } else if (cPassword && password !== cPassword) {
    throw new errorHelper.CodeError(
      'The passwords you entered, do not match',
      406,
    );
  }
}

async function validatePhone(phone) {
  if (!isPossiblePhoneNumber(phone)) {
    throw new errorHelper.CodeError(
      'Phone Number is not valid',
      406,
    );
  }
}

export default { validatePassword, validatePhone };
