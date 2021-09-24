import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PublicIcon from '@material-ui/icons/Public';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import MiniBalanceLabel from './components/MiniBalanceLabel';
import WebSideMenu from './components/WebSideMenu';
import ProfileLabel from './components/ProfileLabel';
import BurgerMenu from './components/BurgerMenu';

function Layout({ children, user }) {
  return (
    <>
      <div className="new-dashboard">
        <div className="nd-header">
          <div className="nd-left-hand-side">
            <div className="nd-logo">
              <img src="https://client.axiance.com/static/media/logo.5683ce9d.svg" alt="axiance" />
            </div>

            <ProfileLabel user={user} />

            <MiniBalanceLabel />

          </div>

          <div className="nd-right-hand-side">
            <div className="nd-icon-bell">
              <NotificationsIcon />
            </div>
            <div className="nd-lang-selector">
              <PublicIcon />
              EN
            </div>

            <Link to="/dashboard/profile" className="nd-setting-icon">
              <SettingsIcon />
            </Link>
            <div className="nd-log-out">
              <ExitToAppIcon />
            </div>
          </div>
        </div>
        <div className="nd-mobile-header">
          <div className="nd-burger-menu-trigger">
            <BurgerMenu />
          </div>
          <div className="nd-logo">
            <img src="https://client.axiance.com/static/media/logo.5683ce9d.svg" alt="axiance" />
          </div>
          <MiniBalanceLabel />
        </div>
        <div className="nd-container">
          <WebSideMenu />
          <div className="nd-content">
            <div className="nd-widgets-area">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
