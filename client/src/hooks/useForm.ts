import { ChangeEvent, FocusEvent, useState, SyntheticEvent } from 'react';
import { IUserForm } from '../interfaces/auth.interfaces';
import { HelpHttp } from '../utils/HelpHttp';
import { toast } from 'react-toastify';

const API = process.env.REACT_APP_API;

const useForm = (
  initialForm: IUserForm,
  validateForm: (form: IUserForm) => IUserForm,
  process: (res?: any) => void,
  endpoint?: string
) => {
  const [form, setForm] = useState<IUserForm>(initialForm);
  const [errors, setErrors] = useState<IUserForm>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (!Object.keys(errors).length) {
      toast.info('Se esta enviando el formulario...');
      setLoading(true);

      const res = await HelpHttp().post(`${API}/api/${endpoint}`, {
        body: JSON.stringify(form),
        headers: {
          'content-type': 'application/json',
          accept: 'application/json'
        }
      });

      setLoading(false);
      setForm(initialForm);

      if (res.err || res.status > 400 || res instanceof DOMException) {
        toast.error(`Error: ${res.err || 'Unknown'} Status: ${res.status || 404}`);
      } else {
        toast.success('Operación exitosa');
        process(res);
      }
    } else {
      toast.warn('Complete bien los campos de email y contraseña');
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    handleBlur,
    handleSubmit,
    handleChange
  };
};

export default useForm;
