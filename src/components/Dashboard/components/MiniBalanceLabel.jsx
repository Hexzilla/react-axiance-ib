import React, { useState, useEffect } from 'react';
import './styles/mini-balance-label.scss';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Popover from './CustomPopover';
import BalanceProfile from './BalanceProfile';

const MiniBalanceLabel = () => {
  const [open, setOpen] = useState(false);
  const [balance, setBalance] = useState();

  useEffect(async () => {
    const affiliateData = await JSON.parse(localStorage.getItem('affiliateData'));
    setBalance(affiliateData.balance);
  }, []);

  return (
    <div className="nd-mini-acc-balance">
      <div className="nd-title">Wallet Balance</div>
      <Popover
        showArrow
        triggerNode={(
          <div className="nd-value">
            $
            {balance}
            <span className="nd-dropdown-icon">
              {open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </span>
          </div>
        )}
        trigger="click"
        onChange={(x) => setOpen(x)}
      >
        <BalanceProfile />
      </Popover>
    </div>
  );
};

export default MiniBalanceLabel;
