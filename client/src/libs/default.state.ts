import { IAuthContext, IUserForm } from '../interfaces/auth.interfaces';
import { IFileContext } from '../interfaces/file.interfaces';

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

export const defaultFileState: IFileContext = {
  files: [],
  buffers: []
};
