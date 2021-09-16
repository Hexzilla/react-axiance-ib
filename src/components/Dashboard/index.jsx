import React from 'react';
import {
  Route, Switch, BrowserRouter,
} from 'react-router-dom';
import Layout from './layout';
import './dashboard.scss';
import DashboardHome from './components/DashboardHome';
import MarketingPage from './components/MarketingPage';
import PlatformPage from './components/PlatformPage';
import AccountPage from './components/AccountPage';
import TradingTools from './components/TradingToolsPage';
import ProfilePage from './components/ProfilePage/index';

const Index = () => (
  <div className="root-dashboard">
    <BrowserRouter basename="/int/dashboard-2">
      <Layout>
        <Switch>
          <Route exact path="/">
            <DashboardHome />
          </Route>
          <Route path="/marketing">
            <MarketingPage />
          </Route>
          <Route path="/accounts">
            <AccountPage />
          </Route>
          <Route path="/platform">
            <PlatformPage />
          </Route>
          <Route path="/trading-tools">
            <TradingTools />
          </Route>
          <Route path="/education">
            <div>education here</div>
          </Route>
          <Route path="/copy-trade">
            <div>copy-trade here</div>
          </Route>
          <Route path="/pamm">
            <div>PAMM here</div>
          </Route>
          <Route path="/promo-clubs">
            <div>promo-clubs here</div>
          </Route>
          <Route path="/profile">
            <BrowserRouter basename="/int/dashboard-2/profile">
              <ProfilePage />
            </BrowserRouter>
          </Route>
        </Switch>

      </Layout>
    </BrowserRouter>
  </div>
);

export default Index;
