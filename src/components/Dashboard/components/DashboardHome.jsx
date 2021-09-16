import React from 'react';
import MyProfile from './Widgets/MyProfile';
import MarketAnalysis from './Widgets/MarketAnalysis';
import MarketingCarousel from './Widgets/MarketingCarousel';
import DummyWidget from './Widgets/DummyWidget';
import PartnernLink from './Widgets/YourPartnerLink';

const DashboardHome = () => (
  <div className="nd-widget-container">
    <div className="col col-2 col-sm-4">
      <MyProfile />
      <MarketAnalysis />
    </div>
    <div className="col col-1 col-sm-4">
      <MarketingCarousel />
    </div>
    <div className="col col-1 col-sm-4"><PartnernLink /></div>
    <div className="col col-2 col-sm-4">
      <div className="col col-2 col-sm-4"><DummyWidget /></div>
      <div className="col col-2 col-sm-4"><DummyWidget /></div>
    </div>
    <div className="col col-1 col-sm-4"><DummyWidget /></div>
    <div className="col col-1 col-sm-4"><DummyWidget /></div>
  </div>
);

export default DashboardHome;
