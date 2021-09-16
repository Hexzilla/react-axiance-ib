import React from 'react';
import './styles/profile-label.scss';

const ProfileLabel = () => (
  <div className="nd-profile-label">
    <img src="https://cdn.pixabay.com/photo/2017/10/15/00/56/man-2852337_960_720.jpg" className="dn-profile-pic" alt="" />
    <span className="nd-badge" />
    <div className="nd-name-section">
      <div className="nd-name rounded-none">Name Surname</div>
      <div className="nd-description">Edit your Profile</div>
    </div>
  </div>
);

export default ProfileLabel;
