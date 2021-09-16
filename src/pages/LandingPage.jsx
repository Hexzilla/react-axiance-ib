import React, { useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { Menu, Header, Footer } from '../components';
import {
  Partner, Slider, Partnership, Accounts, LogoBar,
} from '../components/landingPage';

function LandingPage({ entity }) {
  const history = useHistory();

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem('isLoggedIn')) === true
      && JSON.parse(localStorage.getItem('emailVerified')) === false
    ) {
      history.push('/verify-email');
    } else if (
      JSON.parse(localStorage.getItem('isLoggedIn')) === true
      && JSON.parse(localStorage.getItem('nullPointId')) !== null
    ) {
      history.push('/portal');
    } else if (JSON.parse(localStorage.getItem('isLoggedIn')) === true) {
      history.push('/dashboard');
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
