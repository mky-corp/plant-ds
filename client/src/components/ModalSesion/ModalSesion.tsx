import { Link } from 'react-router-dom';
import MainButton from '../MainButton/MainButton';

const ModalSesion = () => {
  return (
    <section className='w-100 h-100 d-flex flex-column justify-content-around'>
      <MainButton first={true} title='SIGN IN' to='/login' />
      <Link to='/register' className='mt-3 text-center fs-small'>
        you don't have an account{' '}
        <b className='text-decoration-underline'>sign up</b>
      </Link>
    </section>
  );
};

export default ModalSesion;
