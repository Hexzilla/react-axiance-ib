import React, { useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { Menu, Header, Footer } from '../components';
import {
  Partner, Slider, Partnership, Accounts, LogoBar,
} from '../components/landingPage';
import { routerHelper } from '../helpers';

function LandingPage({ entity }) {
  const history = useHistory();

  useEffect(async () => {
    window.scrollTo(0, 0);
    const reroute = await routerHelper.reroute();
    if (reroute !== null) {
      history.push(reroute);
    }
  }, []);

  return (
    <div className="home landing-screen-box">
      <Menu entity={entity} />
      <Header />
      <Partner />
      <Slider />
      <Partnership />
      <Accounts />
      <LogoBar />
      <Footer entity={entity} />
    </div>
  );
}

export default withRouter(LandingPage);
