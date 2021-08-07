import { Link } from 'react-router-dom';

import logo from '../assets/favi2.svg';

const MainStart = () => {
  return (
    <div className='text-center container_start pt-4'>
      <div className=' Conte_MainStart'>
        <img className='MainStart_logo mb-5' src={logo} alt='' />
        <h1 className='mb-5 MainStart_title'>PHG Plants</h1>
      </div>

      <Link to='/options' className='MainStar_btn m-auto mb-5 fw-bold'>
        START
      </Link>

      <p className='Copyright'>
        Copyright <span className='fw-bold simbolo'>©</span> 2021 UC
      </p>

      <footer className='MainStar_footer  d-flex justify-content-between align-items-center p-2'>
        <img src={logo} className='logo_footer' alt='' />
        <p className='mt-2 text_autor'>sitio diseñado por @jochizan</p>
      </footer>
    </div>
  );
};

export default MainStart;
