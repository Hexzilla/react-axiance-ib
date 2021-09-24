import React, { useState, useEffect } from 'react';
import './styles.scss';

function MyProfile({ style, user }) {
  const [affiliateData, setAffiliateData] = useState({});
  const name = `${user.firstName.charAt(0).toUpperCase()}. ${user.lastName}`;
  useEffect(async () => {
    const affiliateDataFetch = await JSON.parse(localStorage.getItem('affiliateData'));
    setAffiliateData({
      id: affiliateDataFetch.refid,
      acid: affiliateDataFetch.external_id,
      registrationDate: affiliateDataFetch.regdate,
      agent: affiliateDataFetch.agent ? affiliateDataFetch.agent : 'N/A',
    });
  }, []);

  return (
    <div className="my-profile widget">
      <h1 className="name">
        Hello
        {' '}
        {name}
        ,
      </h1>
      <div className="grid">
        <div style={style} className="grid-row">
          <div className="column-1">
            IB ID:
          </div>
          <div className="column-2">{affiliateData.id}</div>
        </div>
        <div style={style} className="grid-row">
          <div className="column-1">
            Registered:
          </div>
          <div className="column-2">{affiliateData.registrationDate}</div>
        </div>
        <div style={style} className="grid-row">
          <div className="column-1">
            Agent:
          </div>
          <div className="column-2">{affiliateData.agent}</div>
        </div>
        <div style={style} className="grid-row">
          <div className="column-1">
            Axiance Client ID:
          </div>
          <div className="column-2">{affiliateData.acid}</div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
