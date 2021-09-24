import React, { useEffect, useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { Footer, Menu } from '../components';
import { Questionnaire } from '../components/onboarding';
import { userController } from '../controllers';

function QuestionnairePage({ entity }) {
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
    } else {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);

  return (
    <div className="screen-box">
      <Menu entity={entity} />
      <Questionnaire user={user} />
      <Footer entity={entity} />
    </div>
  );
}

export default withRouter(QuestionnairePage);
