import { ChangeEvent, createContext, useState } from 'react';
import { IAuthContext } from '../interfaces/auth.interfaces';
import { IPropsChildren } from '../interfaces/props.interfaces';

const defaultState = { auth: false };

const AuthContext = createContext<Partial<IAuthContext>>(defaultState);

export const AuthProvider = ({ children }: IPropsChildren) => {
  const [auth, setAuth] = useState(defaultState.auth);

  const handleAuth = (e: ChangeEvent<HTMLElement>) => {
    if (auth) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, handleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
