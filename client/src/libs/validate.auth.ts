import { IUserForm } from '../interfaces/auth.interfaces';

export const validateLogin = (form: IUserForm) => {
  let errors: IUserForm = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (form.email && !form.email.trim()) {
    errors.email = 'El campo "email" es requerido';
  } else if (form.email && !regexEmail.test(form.email.trim())) {
    errors.email = 'El campo "email" es incorrecto';
  }

  if (form.password && !form.password.trim()) {
    errors.password = 'El campo "contraseña" es requerido';
  } else if (form.password && form.password.length < 6) {
    errors.password =
      'El campo "contraseña" debería tener 6 caracteres como minimo';
  }

  return errors;
};

export const validateRegister = (form: IUserForm) => {
  let errors: IUserForm = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (form.names && !form.names.trim()) {
    errors.names = 'El campo "nombre" es requerido';
  } else if (form.names && !regexName.test(form.names.trim())) {
    errors.names = 'El campo "nombre" solo acepta letras y espacios en blanco';
  }

  if (form.surnames && !form.surnames.trim()) {
    errors.surnames = 'El campo "apellido" es requerido';
  } else if (form.surnames && !regexName.test(form.surnames.trim())) {
    errors.surnames =
      'El campo "apellido" solo acepta letras y espacios en blanco';
  }

  if (form.email && !form.email.trim()) {
    errors.email = 'El campo "email" es requerido';
  } else if (form.email && !regexEmail.test(form.email.trim())) {
    errors.email = 'El campo "email" es incorrecto';
  }

  if (form.password && !form.password.trim()) {
    errors.password = 'El campo "contraseña" es requerido';
  } else if (form.password && form.password.length < 6) {
    errors.password =
      'El campo "contraseña" debe tener 6 caracteres como minimo';
  }

  return errors;
};
