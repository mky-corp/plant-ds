import { Link } from 'react-router-dom';
import MainButton from '../MainButton/MainButton';
import { data } from '../../services/data.storage';

const ModalSession = () => {

  return (
    <section className='w-100 h-100 d-flex flex-column justify-content-around'>
      <MainButton first={true} title={data.login.title} to='/login' />
      <Link to='/register' className='mt-3 text-center fs-small-14'>
        {data.login.sign}
        <b className='text-decoration-underline'>{data.login.signBold}</b>
      </Link>
    </section>
  );
};

export default ModalSession;
