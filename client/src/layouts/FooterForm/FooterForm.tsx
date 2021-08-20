import { memo } from 'react';
import logo from '../../assets/logo.jpg';
import { data } from '../../services/data.storage';
import './FooterForm.css';

const FooterForm = () => {
  return (
    <footer className='footer w-100 text-center'>
      <p className='copyright fs-small-12'>
        Copyright <span className='fw-bold'>©</span> 2021 UL, Org.
      </p>
      <section className='container__footer d-flex align-items-center justify-content-between w-100'>
        <img src={logo} className='logo__footer' alt='logo de la aplicación' />
        <p className='m-0 fs-small-14 fw-bold'>{data.footer.credits}</p>
      </section>
    </footer>
  );
};

export default memo(FooterForm);
