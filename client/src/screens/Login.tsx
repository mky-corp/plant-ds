import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import useForm from '../hooks/useForm';

// components
import FormGroup from '../components/FormGroup/FormGroup';
import MainButton from '../components/MainButton/MainButton';
import Loader from '../components/Loader/Loader';

// layouts
import Footer from '../layouts/Footer/Footer';
import HeaderForm from '../layouts/HeaderForm/HeaderForm';

// libs
import { validateLogin } from '../services/validate.auth';
import { initialLogin } from '../services/default.state';
import { data } from '../services/data.storage';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const { login } = data;
  const { form, loading, handleBlur, handleChange, handleSubmit } = useForm(
    initialLogin,
    validateLogin,
    signIn,
    'auth'
  );

  return (
    <section className='bg__start vh-100'>
      <div className='bg__container-form d-flex flex-column'>
        <HeaderForm title='SIGN IN' />
        <Form className='flex-grow-1 d-flex flex-column justify-content-evenly'>
          <FormGroup
            id='email'
            type='email'
            name='email'
            label={login.form[0]}
            placeholder={login.form[0]}
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.email}
          />
          <FormGroup
            id='password'
            type='password'
            name='password'
            label={login.form[1]}
            placeholder={login.form[1]}
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.password}
          />
          <section className='d-flex flex-column justify-content-end flex-g-7 mb-2'>
            {loading ? (
              <Loader />
            ) : (
              <MainButton title='SIGN IN' first={true} onClick={handleSubmit} />
            )}
            <Link to='/register' className='text-center fs-small'>
              you don't have an account{' '}
              <b className='text-decoration-underline'>sign up</b>
            </Link>
          </section>
        </Form>
        <Footer />
      </div>
    </section>
  );
};

export default Login;
