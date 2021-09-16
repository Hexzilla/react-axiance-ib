import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PublicIcon from '@material-ui/icons/Public';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import MiniBalanceLabel from './components/MiniBalanceLabel';
import WebSideMenu from './components/WebSideMenu';
import BlueStripe from './components/BlueStripe';
import ProfileLabel from './components/ProfileLabel';

const Layout = ({ children }) => (
  <div className="new-dashboard">
    <div className="nd-header">
      <div className="nd-left-hand-side">
        <div className="nd-logo">
          <img src="https://client.axiance.com/static/media/logo.5683ce9d.svg" alt="axiance" />
          <ArrowBackIcon className="nb-arrow-back" />
        </div>

        <ProfileLabel />

        <MiniBalanceLabel />
        {/*
        <div className="nd-deposit">
          <button className="nd-btn" type="button">Deposit</button>
        </div> */}

      </div>

      <div className="nd-right-hand-side">
        <div className="nd-icon-bell">
          <NotificationsIcon />
        </div>
        <div className="nd-lang-selector">
          <PublicIcon />
          EN
        </div>

        <Link to="/profile" className="nd-setting-icon">
          <SettingsIcon />
        </Link>
        <div className="nd-log-out">
          <ExitToAppIcon />
        </div>
      </div>
    </div>
    <div className="nd-mobile-header">
      <div className="nd-burger-menu-trigger">
        <MenuIcon />
      </div>
      <div className="nd-logo">
        <img src="https://client.axiance.com/static/media/logo.5683ce9d.svg" alt="axiance" />
      </div>
      <MiniBalanceLabel />
    </div>
    <div className="nd-container">
      <WebSideMenu />
      <div className="nd-content">
        <BlueStripe />
        <div className="nd-widgets-area">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
