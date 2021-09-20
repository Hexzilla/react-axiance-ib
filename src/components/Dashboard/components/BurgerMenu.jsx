import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { elastic as Burger } from 'react-burger-menu';
import './styles/burger-menu.scss';

const BurgerMenuItem = ({
  svg, name, path, click,
}) => {
  const location = useLocation();
  const paths = location.pathname.split('/');
  const isActive = paths[paths.length - 1] === path;

  return (
    <Link className="nd-burger-menu-item" to={path} role="button" tabIndex={0} onClick={click}>
      <img className={isActive ? 'active' : ''} src={`/assets/dashboard/${svg}-icon.svg`} alt={svg} />
      <span className="nd-name">{name}</span>
    </Link>
  );
};

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="nd-bugger-menu">
      <Burger isOpen={menuOpen} onOpen={() => setMenuOpen(true)}>
        <BurgerMenuItem name="Dashboard" svg="dashboard" path="" click={onMenuClick} />
        <BurgerMenuItem name="Marketing" svg="promo" path="marketing" click={onMenuClick} />
        <BurgerMenuItem name="Trading Tools" svg="trading-tools" path="trading-tools" click={onMenuClick} />
        <BurgerMenuItem name="Education" svg="education" path="education" click={onMenuClick} />
      </Burger>
    </div>
  );
};

export default BurgerMenu;
