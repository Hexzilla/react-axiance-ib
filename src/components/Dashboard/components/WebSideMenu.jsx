import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/web-side-menu.scss';

const SideMenuItem = ({
  svg, name, path,
}) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link className="nd-side-menu-item" to={path} role="button" tabIndex={0}>
      <img className={isActive ? 'active' : ''} src={`/assets/dashboard/${svg}-icon.svg`} alt={svg} />
      <span className="nd-name">{name}</span>
    </Link>
  );
};

const WebSideMenu = () => (
  <div className="nd-side-menu">
    <SideMenuItem name="Dashboard" svg="dashboard" path="/dashboard" />
    <SideMenuItem name="Marketing" svg="promo" path="/dashboard/marketing" />
    <SideMenuItem name="Trading Tools" svg="trading-tools" path="/dashboard/trading-tools" />
    <SideMenuItem name="Education" svg="education" path="/dashboard/education" />
    <SideMenuItem name="Analytics" svg="portal" path="/dashboard/portal" />
    {/* <SideMenuItem name="Education" svg="education" path="education" />
    <SideMenuItem name="Copy Trade" svg="copy" path="copy-trade" />
    <SideMenuItem name="PAMM" svg="pamm" path="pamm" />
    <SideMenuItem name="Promo & Clubs" svg="promo" path="promo-clubs" /> */}
    {/* <SideMenuItem name="Wallet" svg="wallet" path="wallet" />
    <SideMenuItem name="Account" svg="accounts" path="account" /> */}
  </div>
);

export default WebSideMenu;
