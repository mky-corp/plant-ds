import { SyntheticEvent, useState } from 'react';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';

// components
import FormGroup from '../components/FormGroup/FormGroup';
import MainButton from '../components/MainButton/MainButton';
import Loader from '../components/Loader/Loader';

// layouts
import Footer from '../layouts/Footer/Footer';
import HeaderForm from '../layouts/HeaderForm/HeaderForm';

// others
import useForm from '../hooks/useForm';
import { validateRegister } from '../services/validate.auth';
import { initialRegister } from '../services/default.state';

const Register = () => {
  const history = useHistory();
  const [first, setFirst] = useState(false);
  const { form, errors, loading, handleBlur, handleChange, handleSubmit } =
    useForm(initialRegister, validateRegister, () => history.push('/login'), 'users');

  const handleSecond = (e: SyntheticEvent) => {
    e.preventDefault();

    if (errors.names || errors.surnames) {
      toast.warn('Rellene todos los campos para continuar');
      return;
    }

    setFirst(!first);
  };

  return (
    <section className='bg__start vh-100'>
      <div className='bg__container-form d-flex flex-column'>
        <HeaderForm title='SIGN UP' />
        <Form className='flex-grow-1 d-flex flex-column justify-content-evenly'>
          {!first ? (
            <>
              <FormGroup
                id='namesInput'
                type='text'
                name='names'
                label='Names'
                value={form.names}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder='Names*'
              />
              <FormGroup
                id='surnamesInput'
                type='text'
                name='surnames'
                label='Surnames'
                value={form.surnames}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder='Surnames*'
              />
            </>
          ) : (
            <>
              <FormGroup
                id='emailInput'
                type='email'
                name='email'
                label='Email'
                value={form.email}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder='Email*'
              />
              <FormGroup
                id='passwordInput'
                type='password'
                name='password'
                label='Password'
                value={form.password}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder='Password*'
              />
            </>
          )}
          <section className='d-flex flex-column justify-content-end flex-g-7 mb-2'>
            {loading ? (
              <Loader />
            ) : first ? (
              <MainButton
                title='SIGN UP'
                first={true}
                type='submit'
                onClick={handleSubmit}
              />
            ) : (
              <MainButton
                title='CONTINUE'
                first={true}
                type='button'
                onClick={handleSecond}
              />
            )}
            <Link to='/login' className='text-center fs-small'>
              you don't have an account{' '}
              <b className='text-decoration-underline'>sign in</b>
            </Link>
          </section>
        </Form>
        <Footer />
      </div>
    </section>
  );
};

export default Register;
