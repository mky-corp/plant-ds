import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

// images
import logo from '../assets/logo.svg';
import github from '../assets/github.svg';
import plant from '../assets/MainHome/pflanze-coloured.svg';
import disease from '../assets/MainHome/plants_disease.svg';
import detects from '../assets/MainHome/detect_disease.svg';
import tfsOne from '../assets/MainHome/card-content-1.svg';
import tfsTwo from '../assets/MainHome/card-content-2.svg';
import cube from '../assets/cube.svg';

// components
import CardMain from '../components/CardMain/CardMain';

// layouts
import HeaderHome from '../layouts/HeaderHome/HeaderHome';
import FooterHome from '../layouts/FooterHome/FooterHome';


const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <section className='vh-100 d-flex flex-column'>
      <HeaderHome />
      <main className='flex-grow-1'>
        <div className='d-flex justify-content-center align-items-center'>
          <section
            className='home__main flex-column flex-md-row
            mx-lg-auto mt-5 mb-5 d-flex justify-content-evenly
            justify-content-sm-around justify-content-lg-between align-items-center'
          >
            <img className='w-main-logo' src={logo} alt='Logo de la aplicación' />
            <section
              className='container__buttons-main d-flex flex-column flex-sm-row flex-md-column
               justify-content-around justify-content-lg-center align-items-center'
            >
              <section className='w-main d-flex flex-column justify-content-center mb-4 mb-sm-0'>
                <h2 className='h2 letters-s-05 fw-bold text-center'>PHG Plants</h2>
                <p className='text-dark text-justify fs-text w-100 m-0 mb-md-4'>
                  Web application for the detection of diseases in common plants
                  in Peru and their possible treatment
                </p>
              </section>
              <section
                className='d-flex flex-column flex-md-row justify-content-between justify-content-md-between align-items-center'>
                <Link className='button__link-main one' to='/options'>Get Started</Link>
                <Link className='button__link-main two' to='/why'>Why PHG Plants?</Link>
                <a className='button__link-main three' href='https://github.com/Uncle-Liquor/phg-plants'>GitHub
                  <img className='m-1' src={github} alt='Logo de Github' />
                </a>
              </section>
            </section>
          </section>
        </div>
        <section className='main__raison mb-5 pb-5'>
          <article className='main__grid mx-1 mx-md-5 mt-3 px-1 px-md-5 '>
            <CardMain
              title='Which plants?'
              img={plant}
              description='Slate helps you see how many
                more days you need to work to
                reach your financial goal for the
                month and year.'
            />
            <CardMain
              title='What diseases?'
              img={disease}
              description='Slate helps you see how many
                more days you need to work to
                reach your financial goal for the
                month and year.'
            />
            <CardMain
              title='As it detects?'
              img={detects}
              css='grid-lg-2'
              description='Slate helps you see how many
                more days you need to work to
                reach your financial goal for the
                month and year.'
            />
            <section className='card__main-principal d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
              <img className='img__card' src={cube} alt='technologies' />
              <div className='d-flex h-dm-100 flex-column align-items-center justify-content-evenly'>
                <section className='d-flex flex-column justify-content-center'>
                  <h3 className='letters-s-05 text-center'>Technologies & Frameworks</h3>
                  <img src={tfsOne} alt='Technologies and frameworks' />
                </section>
                <section>
                  <h3 className='letters-s-05 text-center'>Programming Languages</h3>
                  <img src={tfsTwo} alt='Programming Languages' />
                </section>
              </div>
            </section>
          </article>
        </section>
      </main>
      <FooterHome />
    </section>
  );
};

export default Home;
