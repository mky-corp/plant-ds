import { memo } from 'react';
import logo from '../../assets/logo.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer w-100 text-center'>
      <p className='copyright text_autor'>
        Copyright <span className='fw-bold'>©</span> 2021 UL, Org.
      </p>
      <section className='container__footer d-flex align-items-center justify-content-between w-100'>
        <img src={logo} className='logo__footer' alt='logo de la aplicación' />
        <p className='m-0 text_autor fw-bold'>sitio diseñado por @jochizan</p>
      </section>
    </footer>
  );
};

export default memo(Footer);
