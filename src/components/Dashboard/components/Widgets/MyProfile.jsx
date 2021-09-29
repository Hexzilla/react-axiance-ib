import React from 'react';
// import { FixedSizeList as List } from 'react-window';
import './styles.scss';

const MyProfile = ({ style }) => (
  <div className="my-profile widget">
    <h1 className="name">Hello K. Papadopoulos,</h1>

    <div className="grid">

      <div style={style} className="grid-row">

        <div className="column-1">
          IB ID:
        </div>
        <div className="column-2">5321</div>

      </div>
      <div style={style} className="grid-row">

        <div className="column-1">
          Registered:
        </div>
        <div className="column-2">22 August 2021, 11:54</div>

      </div>
      <div style={style} className="grid-row">

        <div className="column-1">
          Axiance Client ID:
        </div>
        <div className="column-2">16965221</div>
      </div>
    </div>
  </div>
);

export default MyProfile;
