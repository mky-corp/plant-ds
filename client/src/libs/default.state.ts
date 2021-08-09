import { IAuthContext, IUserForm } from '../interfaces/auth.interfaces';

export const initialLogin: IUserForm = {
  email: '',
  password: ''
};

export const initialRegister: IUserForm = {
  names: '',
  surnames: '',
  email: '',
  password: ''
};

export const defaultAuthState: IAuthContext = {
  auth: false,
  user: {
    names: '',
    surnames: '',
    email: '',
    token: ''
  }
};
