import React, { useState, useEffect } from 'react';
import './styles/balance-profile.scss';

const BalanceProfile = () => {
  const [affiliateData, setAffiliateData] = useState(0);

  useEffect(async () => {
    const affiliateDataFetch = await JSON.parse(localStorage.getItem('affiliateData'));
    setAffiliateData(affiliateDataFetch);
  }, []);

  return (
    <div className="balance-profile">
      <div className="balance-info">
        <div className="details">
          <div className="row">
            <div className="title">Paid Commission:</div>
            <div className="value">
              $
              {Number(affiliateData.paid_comm).toLocaleString()}
            </div>
          </div>
          <div className="row">
            <div className="title">Unpaid Commission:</div>
            <div className="value">
              $
              {Number(affiliateData.unpaid_comm).toLocaleString()}
            </div>
          </div>
          <hr className="splitter" />
          <div className="row">
            <div className="title">Clients:</div>
            <div className="value">{affiliateData.clients_count}</div>
          </div>
          <div className="row">
            <div className="title">Client Deposits:</div>
            <div className="value">
              $
              {Number(affiliateData.client_deposits).toLocaleString()}
            </div>
          </div>
          <div className="row">
            <div className="title">Client Withdrawals:</div>
            <div className="value">
              $
              {Number(affiliateData.client_withdrawals).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceProfile;
