import { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';

// locals
import { defaultAuthState } from '../services/default.state';
import { IAuthContext } from '../interfaces/auth.interfaces';
import { IPropsChildren } from '../interfaces/props.interfaces';

const AuthContext = createContext<Partial<IAuthContext>>(defaultAuthState);

export const AuthProvider = ({ children }: IPropsChildren) => {
  const [auth, setAuth] = useState(defaultAuthState.auth);
  const [user, setUser] = useState(defaultAuthState.user);
  const cookie = new Cookies();
  const history = useHistory();

  const setAll = (name: string, value: string, options = { path: '/' }) =>
    cookie.set(name, value, options);

  const removeAll = (name: string) => cookie.remove(name, { path: '/' });

  const signIn = (res?: any) => {
    if (res.token) {
      const { names, surnames, email } = res._user;

      setAuth(true);
      setAll('names', names + '');
      setAll('surnames', surnames + '');
      setAll('email', email + '');
      setAll('token', res.token + '');
      setAll('auth', true + '');
      setUser({
        names: cookie.get('names'),
        surnames: cookie.get('surnames'),
        email: cookie.get('email'),
        token: cookie.get('token')
      });

      history.push('/');
    } else {
      return true;
    }
  };

  const signOff = () => {
    setAuth(false);
    removeAll('names');
    removeAll('surnames');
    removeAll('email');
    removeAll('token');
    removeAll('auth');
    setUser(defaultAuthState.user);
  };

  return (
    <AuthContext.Provider value={{ user, auth, cookie, signIn, signOff }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
