import React from 'react';
import './brand-manual-and-logos.scss';

const BMALCard = ({ path, title }) => (
  <div className="card-container">
    <div className="image-area">
      <img src={`/assets/dashboard/banner/${path}`} alt={path} />
    </div>
    <div className="title">{title}</div>
    <a href="http://localhost:3000/assets/dashboard/banner/banner-1.png" download="GFG">
      <button className="nd-btn" type="button">Download</button>
    </a>
  </div>
);

const BrandManualAndLogos = () => {
  const bmalCards = [{ path: 'banner-1.png', title: 'Brand Manual & Logo' }, { path: 'banner-2.png', title: 'Brand Manual & Logo' }, { path: 'banner-1.png', title: 'Brand Manual & Logo' }, { path: 'banner-2.png', title: 'Brand Manual & Logo' }];

  return (
    <div className="brand-manual-and-logos">
      {bmalCards.map((c) => <BMALCard path={c.path} title={c.title} />)}
    </div>
  );
};

export default BrandManualAndLogos;
