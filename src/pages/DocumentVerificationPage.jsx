import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { Menu, Footer } from '../components';
import { UserData } from '../components/onboarding';
import { userController } from '../controllers';

function DocumentVerificationPage({ entity }) {
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(async () => {
    try {
      await userController.checkAuth();
    } catch (error) {
      history.push('/login');
      return;
    }
    if (JSON.parse(localStorage.getItem('isLoggedIn')) === false || JSON.parse(localStorage.getItem('isLoggedIn')) === null) {
      history.push('/login');
    } else if (JSON.parse(localStorage.getItem('emailVerified')) === false) {
      setUser(JSON.parse(localStorage.getItem('user')));
      history.push('/verify-email');
    } else if (
      JSON.parse(localStorage.getItem('questionnaireCompleted')) === false
    ) {
      setUser(JSON.parse(localStorage.getItem('user')));
      history.push('/questionnaire');
    } else if (JSON.parse(localStorage.getItem('user')).nullPointId !== null) {
      setUser(JSON.parse(localStorage.getItem('user')));
      history.push('/portal');
    } else {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);

  return (
    <div className="screen-box">
      <Menu entity={entity} />
      <UserData user={user} />
      <Footer entity={entity} />
    </div>
  );
}

export default withRouter(DocumentVerificationPage);
