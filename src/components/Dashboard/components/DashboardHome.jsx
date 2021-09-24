import React from 'react';
import MyProfile from './Widgets/MyProfile';
import MarketAnalysis from './Widgets/MarketAnalysis';
import MarketingCarousel from './Widgets/MarketingCarousel';
import DummyWidget from './Widgets/DummyWidget';
import PartnerLink from './Widgets/YourPartnerLink';

function DashboardHome({ user, entity }) {
  return (
    <div className="nd-widget-container">
      <div className="col col-1 col-sm-4">
        <MyProfile user={user} />
      </div>
      <div className="col col-1 col-sm-4">
        <MarketAnalysis />
      </div>
      <div className="col col-1 col-sm-4">
        <MarketingCarousel />
      </div>
      <div className="col col-1 col-sm-4"><PartnerLink entity={entity} /></div>
      <div className="col col-2 col-sm-4">
        <div className="col col-2 col-sm-4"><DummyWidget /></div>
        <div className="col col-2 col-sm-4"><DummyWidget /></div>
      </div>
      <div className="col col-1 col-sm-4"><DummyWidget /></div>
      <div className="col col-1 col-sm-4"><DummyWidget /></div>
    </div>
  );
}

export default DashboardHome;
