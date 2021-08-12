import { data } from '../services/data.storage';

// images
import cube from '../assets/cube.svg';
import logo from '../assets/logo.svg';

// components
import CardMain from '../components/CardMain/CardMain';
import CardTech from '../components/CardTech/CardTech';
import ButtonHome from '../components/ButtonHome/ButtonHome';

// layouts
import HeaderHome from '../layouts/HeaderHome/HeaderHome';
import FooterHome from '../layouts/FooterHome/FooterHome';

const Home = () => {
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
            <img
              className='w-main-logo'
              src={logo}
              alt='Logo de la aplicación'
            />
            <section
              className='container__buttons-main d-flex flex-column flex-sm-row flex-md-column
               justify-content-around justify-content-lg-center align-items-center'
            >
              <section className='w-main d-flex flex-column justify-content-center mb-4 mb-sm-0'>
                <h2 className='h2 letters-s-5 fw-bold text-center'>
                  PHG Plants
                </h2>
                <p className='text-dark text-justify fs-text w-100 m-0 mb-md-4'>
                  {data.home.descMain}
                </p>
              </section>
              <section
                className='d-flex flex-column flex-md-row
                justify-content-between justify-content-md-between align-items-center'
              >
                {data.home.buttonsHome.map((item, idx) => (
                  <ButtonHome
                    key={idx}
                    to={item?.to}
                    href={item?.href}
                    title={item.title}
                    css={item.css}
                  />
                ))}
              </section>
            </section>
          </section>
        </div>
        <section className='main__raison mb-5 pb-5'>
          <article className='main__grid mx-1 mx-md-5 mt-3 px-1 px-md-5 '>
            {data.home.cardsMain.map((item, idx) => (
              <CardMain
                title={item.title}
                img={item.img}
                key={idx}
                grid={item.grid}
                description={item.description}
              />
            ))}
            <section
              className='card__main-principal d-flex flex-column flex-md-row
              justify-content-evenly align-items-center'
            >
              <img className='img__card' src={cube} alt='technologies' />
              <div className='d-flex h-dm-100 flex-column align-items-center justify-content-evenly'>
                {data.home.tfs.cards.map((item, idx) => (
                  <CardTech title={item.title} img={item.img} key={idx} />
                ))}
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
