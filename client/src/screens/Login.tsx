import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

// components
import FormGroup from '../components/FormGroup/FormGroup';
import MainButton from '../components/MainButton/MainButton';
import Loader from '../components/Loader/Loader';

// layouts
import Footer from '../layouts/Footer/Footer';
import HeaderForm from '../layouts/HeaderForm/HeaderForm';

// others
import useForm from '../hooks/useForm';
import { validateLogin } from '../libs/validate.auth';
import { initialLogin } from '../libs/default.state';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const { form, loading, handleBlur, handleChange, handleSubmit } = useForm(
    initialLogin,
    validateLogin,
    signIn ? signIn : () => '',
    'auth'
  );

  return (
    <section className='bg__start vh-100 w-100'>
      <div className='bg__container-form d-flex flex-column'>
        <HeaderForm title='SIGN IN' />
        <Form className='flex-grow-1 d-flex flex-column justify-content-evenly'>
          <FormGroup
            id='emailInput'
            type='email'
            name='email'
            label='Email'
            placeholder='Email*'
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.email}
          />
          <FormGroup
            id='passwordInput'
            name='password'
            type='password'
            label='Password'
            placeholder='Password*'
            onBlur={handleBlur}
            onChange={handleChange}
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
