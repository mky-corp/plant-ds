import { IAuthContext, IUserForm } from '../interfaces/auth.interfaces';
import { IFileContext } from '../interfaces/file.interfaces';
import {
  auth,
  names,
  namesImages,
  images,
  email,
  surnames,
  token
} from './auth.storage';

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
  auth,
  user: {
    names: names || '',
    surnames: surnames || '',
    email: email || '',
    token: token || ''
  }
};

export const defaultFileState: IFileContext = {
  names: namesImages,
  buffers: [],
  images
};
