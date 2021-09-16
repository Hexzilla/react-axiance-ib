import React, { useState } from 'react';
import './styles/balance-profile.scss';
import AccountSelector from './AccountSelector';

const BalanceProfile = () => {
  const [selectAccount, setSelectAccount] = useState(false);

  const showAccountSelector = (val) => {
    setTimeout(() => {
      setSelectAccount(val);
    }, 100);
  };

  return selectAccount ? <AccountSelector onBack={() => showAccountSelector(false)} /> : (
    <div className="balance-profile">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div className="switch-account-trigger" onClick={() => showAccountSelector(true)} tabIndex={0} role="button">
        <img src="/assets/dashboard/switch.svg" alt="switch" />
        Switch Account
      </div>
      <div className="selected-account">
        <div className="account-name">
          Trading Account Name
          <div className="account-number">MT4 105342323</div>
        </div>
        <div className="account-status">
          <span className="tag live">LIVE</span>
        </div>
        <div className="deposit">
          <button className="nd-btn" type="button">Deposit</button>
        </div>
      </div>

      <div className="balance-info">
        <div className="equation">
          <div className="equity">
            <div>Equity</div>
            <div>$51 323.32</div>
          </div>
          <div className="equal">=</div>
          <div className="free-margin-margin">
            Free Margin
            <br />
            +
            <br />
            Margin
          </div>
          <div className="values">
            $50 293.23
            <br />
            <br />
            $233.55
          </div>
        </div>

        <div className="details">
          <div className="row">
            <div className="title">Open P/L</div>
            <div className="value">$2124.34</div>
          </div>
          <div className="row">
            <div className="title">Bonus</div>
            <div className="value">$0</div>
          </div>
          <div className="row">
            <div className="title">Margin level</div>
            <div className="value">343443.23%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceProfile;
