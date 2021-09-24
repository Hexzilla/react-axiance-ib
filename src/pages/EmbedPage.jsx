import React, { useEffect, useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import '../styles/Embed.scss';
import { userController } from '../controllers';

function EmbedPage({ entity }) {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [url, setUrl] = useState('');

  useEffect(async () => {
    try {
      await userController.checkAuth();
    } catch (error) {
      history.push('/login');
      return;
    }

    if (JSON.parse(localStorage.getItem('isLoggedIn')) === false || JSON.parse(localStorage.getItem('isLoggedIn')) === null) {
      history.push('/login');
    }

    const user = JSON.parse(localStorage.getItem('user'));
    try {
      setUrl(await userController.npAutoLogin(user.nullPointId, entity));
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
    }
  }, []);

  return (
    <iframe className="frame" src={url} title="Null Point embed" />
  );
}

export default withRouter(EmbedPage);
