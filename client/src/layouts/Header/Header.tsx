import logo from '../../assets/favi2.svg';
import './Header.css';

const Header = () => {
  return (
    <header className='d-flex w-100 principal__header'>
      <img src={logo} alt='Logo de la aplicación' />
      <h1>PHG Plants</h1>
    </header>
  );
};

export default Header;
