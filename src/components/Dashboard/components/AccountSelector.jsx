import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './styles/account-selector.scss';

const SelectAccountOption = ({ selected, type }) => (
  <div className="option">
    <div className="radio-icon">
      {selected && <div className="selected" />}
    </div>
    <div className="content">
      <div className="name">
        <div className="text">Account Name</div>
      </div>
      <div className="balance">
        Balance: $39,393.34
      </div>
    </div>
    <div className="tag-section"><span className={`tag ${type}`}>{type}</span></div>
  </div>
);

const AccountSelector = ({ onBack }) => (
  <div className="account-selector">
    <div className="back">
      <ArrowBackIcon onClick={onBack} />
      <span>Select Trading Account</span>
    </div>

    <SelectAccountOption type="live" />
    <SelectAccountOption selected type="demo" />
    <SelectAccountOption type="live" />
  </div>
);

export default AccountSelector;
