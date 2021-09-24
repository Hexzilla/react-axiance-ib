/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';

const TabNavigation = ({ tabs }) => {
  const [selected, setSelected] = useState(tabs[0]);
  const [linkBarStyle, setStyle] = useState({ width: 197, left: 5 });
  const tabList = useRef();

  const handleSelect = (e, tab) => {
    setSelected(tab);
    const eles = tabList.current.getElementsByClassName('tab-header');
    let left = 0;
    let width = 0;
    for (let i = 0; i < eles.length; i += 1) {
      if (eles[i] === e.target) {
        width = e.target.offsetWidth;
        break;
      } else {
        left += eles[i].offsetWidth;
      }
    }
    setStyle({ width: width - 10, left: left + 5 });
  };

  useEffect(() => {
    const eles = tabList.current.getElementsByClassName('tab-header');
    handleSelect({ target: eles[0] }, tabs[0]);
  }, []);

  return (
    <div className="tabs-container">
      <div className="tab-headers" ref={tabList}>
        {tabs.map((t) => (
          <div
            className={`tab-header ${t.key === selected.key ? 'active-tab' : ''}`}
            onClick={(e) => handleSelect(e, t)}
            key={t.key}
          >
            {t.title}
          </div>
        ))}
        <div className="tab-active-link-bar" style={linkBarStyle} />
      </div>
      <div className="tab-content">
        {selected.props ? <selected.Component {...selected.props} /> : <selected.Component />}
      </div>
    </div>
  );
};

export default TabNavigation;
