/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const VerifyForm = () => {
  const history = useHistory();
  return (
    <div className="w-full max-w-xs place-content-center">
      <div className="head-line">
        <ArrowBackIcon onClick={() => history.goBack()} />
        <h2 className="text-2xl font-bold text-center">
          Personal Information
        </h2>
      </div>
      {/* <form className="rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
        <p className="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </form> */}

      <form className="max-w-sm mx-auto rounded-lg shadow-m overflow-hidden p-6 space-y-5">

        <div className="outline relative border-2 focus-within:border-blue-500">
          <input type="text" name="firstName" placeholder=" " className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" />
          <label htmlFor="firstName" className="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0">First Name</label>
        </div>
        <div className="outline relative border-2 focus-within:border-blue-500">
          <input type="email" name="email" placeholder=" " className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" />
          <label htmlFor="email" className="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0">Email</label>
        </div>
        <div className="outline relative border-2 focus-within:border-blue-500">
          <input type="password" name="password" placeholder=" " className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" />
          <label htmlFor="password" className="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0">Password</label>
        </div>
      </form>

    </div>
  );
};

export default VerifyForm;
