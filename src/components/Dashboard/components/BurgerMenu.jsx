import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { elastic as Burger } from 'react-burger-menu';
import './styles/burger-menu.scss';

const BurgerMenuItem = ({
  svg, name, path,
}) => {
  const location = useLocation();
  const paths = location.pathname.split('/');
  const isActive = paths[paths.length - 1] === path;

  return (
    <Link className="nd-burger-menu-item" to={path} role="button" tabIndex={0}>
      <img className={isActive ? 'active' : ''} src={`/assets/dashboard/${svg}-icon.svg`} alt={svg} />
      <span className="nd-name">{name}</span>
    </Link>
  );
};

const BurgerMenu = () => (
  <div className="nd-bugger-menu">
    <Burger>
      <BurgerMenuItem name="Dashboard" svg="dashboard" path="" />
      <BurgerMenuItem name="Marketing" svg="promo" path="marketing" />
      <BurgerMenuItem name="Trading Tools" svg="trading-tools" path="trading-tools" />
      <BurgerMenuItem name="Education" svg="education" path="education" />
    </Burger>
  </div>
);

export default BurgerMenu;
