import React, { useEffect, useState } from 'react';
import {
  Route, Switch, useHistory,
} from 'react-router-dom';
import Layout from '../components/Dashboard/layout';
import '../styles/Dashboard/Dashboard.scss';
import DashboardHome from '../components/Dashboard/components/DashboardHome';
import MarketingPage from '../components/Dashboard/components/MarketingPage';
import PlatformPage from '../components/Dashboard/components/PlatformPage';
import AccountPage from '../components/Dashboard/components/AccountPage';
import TradingTools from '../components/Dashboard/components/TradingToolsPage';
import ProfilePage from '../components/Dashboard/components/ProfilePage/index';
import EmbedPage from './EmbedPage';
import { userController } from '../controllers';

export default function DashboardPage({ entity }) {
  const [dataLoading, setDataLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const history = useHistory();

  useEffect(async () => {
    const user = await JSON.parse(localStorage.getItem('user'));
    setUserData(user);
    try {
      await userController.checkAuth();
      await userController.getAffiliateDetails(user.nullPointId, 'fsa');
    } catch (error) {
      history.push('/login');
    }
    setDataLoading(false);
  }, []);

  return (
    <div className="root-dashboard">
      {dataLoading
        ? null
        : (
          <Layout user={userData}>
            <Switch>
              <Route path="/dashboard" exact component={() => <DashboardHome entity={entity} user={userData} />} />
              <Route path="/dashboard/marketing" exact component={() => <MarketingPage entity={entity} />} />
              <Route path="/dashboard/accounts" exact component={() => <AccountPage />} />
              <Route path="/dashboard/platform" exact component={() => <PlatformPage />} />
              <Route path="/dashboard/trading-tools" exact component={() => <TradingTools />} />
              <Route path="/dashboard/education" exact component={() => <div>education here</div>} />
              <Route path="/dashboard/portal" exact component={() => <EmbedPage entity={entity} />} />
              <Route path="/dashboard/copy-trade" exact component={() => <div>copy-trade here</div>} />
              <Route path="/dashboard/pamm" exact component={() => <div>PAMM here</div>} />
              <Route path="/dashboard/promo-clubs" exact component={() => <div>promo-clubs here</div>} />
              <Route path="/dashboard/profile">
                <ProfilePage />
              </Route>
            </Switch>
          </Layout>
        )}
    </div>
  );
}
