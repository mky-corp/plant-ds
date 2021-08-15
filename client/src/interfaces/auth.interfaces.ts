import Cookies from 'universal-cookie';

interface IAuthContext {
  auth: boolean;
  user: {
    names?: string;
    surnames?: string;
    email?: string;
    token?: string;
  };
  cookie?: Cookies;
  signIn?: (res?: any) => void;
  signOff?: () => void;
}

interface IUserForm {
  names?: string;
  surnames?: string;
  email?: string;
  password?: string;
}

export type { IAuthContext, IUserForm };
