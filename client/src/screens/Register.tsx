import { SyntheticEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../hooks/useForm';
import left from '../assets/arrow_left.svg';

// components
import FormGroup from '../components/FormGroup/FormGroup';
import MainButton from '../components/MainButton/MainButton';
import Loader from '../components/Loader/Loader';

// layouts
import Footer from '../layouts/Footer/Footer';
import HeaderForm from '../layouts/HeaderForm/HeaderForm';

// others
import { validateRegister } from '../services/validate.auth';
import { initialRegister } from '../services/default.state';
import { data } from '../services/data.storage';

const Register = () => {
  const history = useHistory();
  const { register } = data;
  const [first, setFirst] = useState(false);
  const {
    form,
    errors,
    loading,
    setLoading,
    handleBlur,
    handleChange,
    handleSubmit
  } = useForm(
    initialRegister,
    validateRegister,
    () => history.push('/login'),
    'users'
  );

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleSecond = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!form.surnames || !form.names)
      toast.warn('Rellene todos los campos para continuar');
    if (errors.names) toast.error(errors.names);
    if (errors.surnames) toast.error(errors.surnames);

    if (!form.surnames || !form.names || errors.names || errors.surnames)
      return;

    setLoading(true);
    await delay(500);
    setLoading(false);

    toast.success('Campos validados continue...');
    setFirst(!first);
  };

  const handleButton = async () => {
    setLoading(true);
    await delay(500);
    setLoading(false);
    setFirst(!first);
  };

  return (
    <section className='bg__start vh-100'>
      <div className='bg__container-form d-flex flex-column'>
        <HeaderForm title={register.title} />
        <Form className='flex-grow-1 d-flex flex-column justify-content-evenly'>
          {!first ? (
            <>
              <FormGroup
                id='names'
                type='text'
                name='names'
                label={register.form[0]}
                value={form.names}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={register.form[0]}
              />
              <FormGroup
                id='surnames'
                type='text'
                name='surnames'
                label={register.form[1]}
                value={form.surnames}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={register.form[1]}
              />
            </>
          ) : (
            <>
              <FormGroup
                id='emailInput'
                type='email'
                name='email'
                label={register.form[2]}
                value={form.email}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={register.form[2]}
              />
              <FormGroup
                id='passwordInput'
                type='password'
                name='password'
                label={register.form[3]}
                value={form.password}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={register.form[3]}
              />
            </>
          )}
          <section className='d-flex flex-column justify-content-end flex-g-7 mb-2'>
            {loading ? (
              <Loader />
            ) : first ? (
              <section className='d-flex justify-content-center mb-3'>
                <Button
                  className='btn btn-transparent'
                  type='button'
                  onClick={handleButton}
                >
                  <img src={left} alt='Atrás' />
                </Button>
                <Button
                  className='principal__btn fw-bold fs-5'
                  type='submit'
                  onClick={handleSubmit}
                >
                  {register.title}
                </Button>
              </section>
            ) : (
              <MainButton
                title={register.continue}
                first={true}
                type='button'
                onClick={handleSecond}
              />
            )}
            <Link to='/login' className='text-center fs-small'>
              {register.sign}{' '}
              <b className='text-decoration-underline'>{register.signBold}</b>
            </Link>
          </section>
        </Form>
        <Footer />
      </div>
    </section>
  );
};

export default Register;
