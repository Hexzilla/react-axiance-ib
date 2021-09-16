import React from 'react';
import { Select } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Popover from '../CustomPopover';

const YourPartnerLink = () => (
  <div className="widget your-partner-link">
    <h1 className="title">Your Partner Link</h1>
    <div>
      <Select
        variant="outlined"
        native
        value={10}
        inputProps={{
          name: 'age',
          id: 'outlined-age-native-simple',
        }}
      >
        <option aria-label="None" value="" />
        <option value={10}>Terminated</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Select>
      <Select
        variant="outlined"
        native
        value={10}
        inputProps={{
          name: 'age',
          id: 'outlined-age-native-simple',
        }}
      >
        <option aria-label="None" value="" />
        <option value={10}>Registration Page</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Select>

    </div>
    <div>
      <Select
        variant="outlined"
        native
        value={10}
        inputProps={{
          name: 'age',
          id: 'outlined-age-native-simple',
        }}
      >
        <option aria-label="None" value="" />
        <option value={10}>English</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Select>
    </div>

    <span className="sign-up-link">
      Sign Up Link
      <Popover
        className="warning-popover"
        showArrow
        triggerNode={<ErrorOutlineIcon />}
        trigger="click"
      >
        <div className="champaign-name-popover">
          Use this link to enroll clients under a specific trending campaign
        </div>
      </Popover>
    </span>
    <input disabled value="https://axiance.com/en-us/?fxbl=sdfiwedsf&fxsrc=sn%skdfalkadfowiadf" />
    <button className="nd-btn" type="button">Copy</button>
  </div>
);

export default YourPartnerLink;
