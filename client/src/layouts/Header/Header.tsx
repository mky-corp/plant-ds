import { memo } from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className='d-flex w-100 principal__header'>
      <img src={logo} alt='Logo de la aplicación' />
      <h1>PHG Plants</h1>
    </header>
  );
};

export default memo(Header);
