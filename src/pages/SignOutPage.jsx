import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function SignOutPage() {
  const history = useHistory();

  useEffect(() => {
    const cookies = new Cookies();
    localStorage.clear();
    cookies.remove('token', { path: '/' });
    history.push('/login');
  }, []);

  return null;
}
