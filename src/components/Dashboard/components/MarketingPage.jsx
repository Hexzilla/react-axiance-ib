import React from 'react';
import './Widgets/styles.scss';
import TabNavigation from './Widgets/TabNavigation';
import BrandManualAndLogos from './Marketing/BrandManualAndLogos';
import Banners from './Marketing/Banners';
import MarketingVideo from './Widgets/MarketingVideo';

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
      },
      ]}
    />
  </div>
);

export default MarketingPage;
