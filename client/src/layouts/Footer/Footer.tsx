import logo from '../../assets/favi2.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer w-100 text-center'>
      <p className='copyright fs-6'>
        Copyright <span className='fw-bold'>©</span> 2021 UL, Org.
      </p>
      <section className='container__footer d-flex align-items-center w-100'>
        <img src={logo} className='logo_footer' alt='logo de la aplicación' />
        <p className='m-0 text_autor'>sitio diseñado por @jochizan</p>
      </section>
    </footer>
  );
};

export default Footer;
