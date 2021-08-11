import { memo } from 'react';
import logo from '../../assets/logo.svg';
import './FooterHome.css';

const FooterHome = () => {
  return (
    <footer className='home__footer d-flex justify-content-around align-items-center'>
      <section className='d-flex justify-content-between align-items-center'>
        <img className='header__logo-home me-4' src={logo} alt='Logo de la aplicación' />
        <h3 className='d-none d-sm-flex fs-4 letters-s-5 mx-3'>PHG Plants</h3>
      </section>
      <p className='fs-small white-color m-0'>sitio diseñado por @jochizan</p>
    </footer>
  );
};

export default memo(FooterHome);