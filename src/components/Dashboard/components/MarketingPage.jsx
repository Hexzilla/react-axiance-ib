import React from 'react';
import './Widgets/styles.scss';
import TabNavigation from './Widgets/TabNavigation';
import BrandManualAndLogos from './Marketing/BrandManualAndLogos';
import Banners from './Marketing/Banners';
import MarketingVideo from './Widgets/MarketingVideo';
import MarketingReferralLinks from './Widgets/MarketingReferralLinks';

const MarketingPage = () => (
  <div className="nd-widget-container">
    <TabNavigation
      tabs={[{
        title: 'Brand Manual & Logos',
        Component: BrandManualAndLogos,
        key: 'bml',
      }, {
        title: 'Banners',
        Component: Banners,
        key: 'b',
      }, {
        title: 'Videos',
        Component: MarketingVideo,
        key: 'v',
      }, {
        title: 'Referral Links',
        Component: MarketingReferralLinks,
        key: 'rl',
      },
      ]}
    />
  </div>
);

export default MarketingPage;
