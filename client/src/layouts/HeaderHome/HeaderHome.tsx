import './HeaderHome.css';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/logo.png';
import { data } from '../../services/data.storage';

const HeaderHome = () => {
  const { headerHome } = data;

  return (
    <header className='home__container '>
      <div
        className='home__display w-100 p-3 h-100 d-flex flex-column flex-lg-row
        justify-content-between justify-content-lg-around align-items-center'
      >
        <a href='/plant-ds'>
          <section className='d-flex justify-content-between align-items-center'>
            <img
              className='header__logo-home me-4'
              src={logo}
              alt='Logo de la aplicación'
            />
            <h1 className='fs-2 dark-color letters-s-5 mx-3'>PlantDS</h1>
          </section>
        </a>
        <section className='d-none d-sm-flex pt-3 p-lg-0 w-nav-auto justify-content-evenly'>
          <NavLink to='/options' className='p-1 h-first fs-text fw-bold'>
            {headerHome.start}
          </NavLink>
          <div className='header__separate' />
          <HashLink to='#plants' className='p-1 h-first fs-text' replace>
            {headerHome.learn}
          </HashLink>
          <div className='header__separate' />
          <HashLink to='#what' className='p-1 h-first fs-text' replace>
            {headerHome.contact}
          </HashLink>
          <div className='header__separate' />
          <HashLink to='#about' className='p-1 h-first fs-text' replace>
            {headerHome.aboutUs}
          </HashLink>
        </section>
      </div>
    </header>
  );
};

export default memo(HeaderHome);
