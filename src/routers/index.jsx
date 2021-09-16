import React, { useEffect, useState } from 'react';
import {
  Route, Switch, BrowserRouter, Redirect,
} from 'react-router-dom';
import IntPage from './InternationalPage';
import { CookiePopup } from '../components/landingPage';
import EuPage from './EUPage';

const Index = () => {
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(false);
  }, []);

  return (
    <div className="App risk-banner" id="app-root">
      {!loading && (
        <>
          <Switch>
            {window.location.hostname === 'portal.axiancepartnerseu.com'
              ? (
                <EuPage />
              )
              : (
                <>
                  <Route exact path="/">
                    <Redirect to="/int" />
                  </Route>
                  <Route path="/int">
                    <BrowserRouter basename="/int">
                      <IntPage />
                    </BrowserRouter>
                  </Route>
                </>
              )}
          </Switch>
          <CookiePopup />
        </>
      )}
    </div>
  );
};

export default Index;
