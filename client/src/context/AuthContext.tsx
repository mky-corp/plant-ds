import { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { defaultAuthState } from '../libs/default.state';

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


  const removeAll = (name: string) =>
    cookie.remove(name, { path: '/' });


  const signIn = (res?: any) => {

    if (res.token) {

      setAuth(true);
      setAll('names', res._user.names + '');
      setAll('surnames', res._user.surnames + '');
      setAll('email', res._user.email + '');
      setAll('token', res.token + '');
      const _user = {
        names: cookie.get('names'),
        surnames: cookie.get('surnames'),
        email: cookie.get('email'),
        token: cookie.get('token')
      };

      setUser(_user);
      history.push('/home');

    } else {
      toast.error('Error el token de autenticación no existe');
    }
  };

  const signOff = () => {
    setAuth(false);
    removeAll('names');
    removeAll('surnames');
    removeAll('email');
    removeAll('token');
    setUser(defaultAuthState.user);
  };

  return (
    <AuthContext.Provider value={{ user, auth, cookie, signIn, signOff }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
