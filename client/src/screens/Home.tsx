import { useState } from 'react';
import useModal from '../hooks/useModal';
import { data } from '../services/data.storage';
import { IPropsCardMain } from '../interfaces/props.interfaces';

// images
import tf from '../assets/tensorflow.svg';
import model from '../assets/model.svg';
import leaf from '../assets/leaf.svg';
import cube from '../assets/cube.svg';
import logo from '../assets/logo.png';

// components
import ButtonHome from '../components/ButtonHome/ButtonHome';
import CardAbout from '../components/CardAbout/CardAbout';
import CardMain from '../components/CardMain/CardMain';
import CardTech from '../components/CardTech/CardTech';
import UpArrow from '../components/UpArrow/UpArrow';
import Modal from '../components/Modal/Modal';

// layouts
import HeaderHome from '../layouts/HeaderHome/HeaderHome';
import FooterHome from '../layouts/FooterHome/FooterHome';

const Home = () => {
  const [isOpen, openModal, closeModal] = useModal();
  const [item, setItem] = useState<IPropsCardMain>({});

  const onClick = (item: IPropsCardMain) => {
    setItem(item);
    openModal();
  };

  return (
    <section className='vh-100 d-flex flex-column'>
      <UpArrow />
      <Modal isOpen={isOpen} handleClose={closeModal}>
        <section
          className='main__modal d-flex flex-column flex-md-row 
        align-items-center over-y'
        >
          <div className='w-card-detect m-md-3 d-flex flex-column align-items-center justify-content-center'>
            <img
              className='img-thumbnail p-1 ps-md-3'
              src={item.img}
              alt={item.title}
            />
          </div>
          <section className='d-flex flex-column justify-content-center'>
            <h3 className='letters-s-5 fw-bold ps-md-3 pt-2 text-center first-color'>
              {item.title}
            </h3>
            <p className='fs-small-12 px-3 px-md-0 ps-md-5 pe-md-3 pt-3 text-justify'>
              {item.description}
            </p>
          </section>
        </section>
      </Modal>
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
                <h2 className='h2 letters-s-5 fw-bold text-center'>PlantDS</h2>
                <p className='text-dark text-justify fs-text w-100 m-0 mb-md-4'>
                  {data.home.descMain}
                </p>
              </section>
              <section
                className='d-flex flex-column flex-md-row
                justify-content-between justify-content-md-between align-items-center'
              >
                {data.home.buttonsHome.map((item, idx) => (
                  <ButtonHome key={idx} {...item} />
                ))}
              </section>
            </section>
          </section>
        </div>
        <section className='main__raison mb-5 pb-5'>
          <article className='main__grid mx-1 mx-md-3 mx-lg-5 mt-3 px-1 px-md-3 px-lg-5'>
            {data.home.cardsMain.map((item, idx) => (
              <CardMain key={idx} {...item} />
            ))}
            <section
              className='card__main-principal d-flex flex-column flex-md-row
              justify-content-evenly align-items-center'
            >
              <img
                className='img__card pt-2 pt-dm-0'
                src={cube}
                alt='technologies'
              />
              <div className='d-flex h-dm-100 flex-column align-items-center justify-content-center'>
                {data.home.tfs.cards.map((item, idx) => (
                  <CardTech key={idx} {...item} />
                ))}
              </div>
            </section>
          </article>
        </section>
        <section id='plants' className='main__raison mb-5 pb-5'>
          <section className='d-flex justify-content-around px-4 px-md-0 pt-5 ps-md-5'>
            <h2 className='fs-2'>¿Qué plantas detecta?</h2>
            <p />
            <p />
            <p />
          </section>
          <article className='main__grid mx-1 mx-md-3 mx-lg-5 mt-3 px-1 px-md-3 px-lg-5'>
            {data.home.cardsPlants.map((item, idx) => (
              <CardMain key={idx} {...item} onClick={() => onClick(item)} />
            ))}
          </article>
        </section>
        <section id='diseases' className='main__raison mb-5 pb-5'>
          <section className='d-flex justify-content-around px-4 px-md-0 pt-5 ps-md-5'>
            <h2 id='#disease' className='fs-2'>
              ¿Qué enfermedades detecta?
            </h2>
            <p />
            <p />
            <p />
          </section>
          <article className='main__grid mx-1 mx-md-3 mx-lg-5 mt-3 px-1 px-md-3 px-lg-5'>
            {data.home.cardsDisease.map((item, idx) => (
              <CardMain key={idx} {...item} onClick={() => onClick(item)} />
            ))}
          </article>
        </section>
        <section id='detect' className='main__raison mb-5 pb-5'>
          <section className='d-flex justify-content-around px-4 px-md-0 pt-5 ps-md-5'>
            <h2 className='fs-2'>¿Cómo los detecta?</h2>
            <p />
            <p />
            <p />
          </section>
          <article className='d-flex mt-4 h-75 flex-column flex-lg-row align-items-center justify-content-around'>
            <section className='card__main-principal'>
              <h1 className='letters-s-5 fs-4 my-3 my-md-4 text-center first-color'>
                TensorFlow & Redes Neuronales Artificiales
              </h1>
              <section className='d-flex flex-column flex-md-row justify-content-around align-items-center'>
                <img
                  className='w-25 h-25 pb-3 pb-md-0 px-md-4'
                  src={tf}
                  alt='technologies'
                />
                <p className='text-justify fs-small-12 px-4'>
                  TensorFlow es una plataforma de código abierto de extremo a
                  extremo para el aprendizaje automático. Cuenta con un
                  ecosistema integral y flexible de herramientas, bibliotecas y
                  recursos de la comunidad que permite que los investigadores
                  innoven con el aprendizaje automático y los desarrolladores
                  creen e implementen aplicaciones con tecnología de AA
                  fácilmente.
                </p>
              </section>
            </section>
            <img
              className='w-image h-50 pt-5 pt-lg-0'
              src={model}
              alt='CNN tensorflow API'
            />
          </article>
        </section>
        <section id='what' className='main__raison mb-5 pb-5'>
          <section className='d-flex justify-content-around px-4 px-md-0 pt-5 ps-md-5'>
            <h2 className='fs-2'>¿Que es PlantDS?</h2>
            <p />
            <p />
            <p />
          </section>
          <article className='d-flex mt-4 h-75 flex-column flex-lg-row align-items-center justify-content-around'>
            <section className='card__main-principal'>
              <h1 className='letters-s-5 fs-4 my-2 mx-2 mx-md-1 my-md-3 text-center first-color'>
                Historia pequeña de este proyecto
              </h1>
              <section className='d-flex flex-column flex-md-row justify-content-around align-items-center'>
                <img
                  className='w-25 h-25 pb-3 pb-md-0 px-md-2'
                  src={logo}
                  alt='technologies'
                />
                <p className='text-justify fs-small-12 px-4'>
                  PlantDS es un proyecto colaborativo de código abierto bajo
                  licencia Apache 2.0 que tiene como objetivo la implementación
                  de redes neuronales convolucionales en una aplicación web
                  moderna con{' '}
                  <a
                    href='https://es.reactjs.org'
                    target='_blank'
                    rel='noreferrer'
                    className='fw-bold'
                  >
                    React{' '}
                  </a>
                  y su utilización en nuestro país en donde se sufre una gran
                  cantidad de perdidas en cultivos debido a enfermedades que
                  afectan a este. Para poder aportar puede ir a nuestro{' '}
                  <a
                    href='https://github.com/Uncle-Liquor/plant-ds'
                    target='_blank'
                    rel='noreferrer'
                    className='fw-bold'
                  >
                    GitHub
                  </a>
                  , y poder sugerir y aportar cambios que guste a este proyecto
                  y otros similares.
                </p>
              </section>
            </section>
            <img
              className='w-image h-50 pt-5 pt-lg-0'
              src={leaf}
              alt='CNN tensorflow API'
            />
          </article>
        </section>

        <section id='about' className='main__raison mb-5 pb-5'>
          <section className='d-flex justify-content-around px-3 px-md-1 pt-5 pb-3 pb-lg-5 pb-xl-3 ps-md-5'>
            <h2 className='fs-2'>Sobre nosotros</h2>
            <p />
            <p />
            <p />
          </section>
          <article className='main__grid-fit h-fit'>
            {data.home.cardsAbout.map((item, idx) => (
              <CardAbout key={idx} {...item} />
            ))}
          </article>
        </section>
      </main>
      <FooterHome />
    </section>
  );
};

export default Home;
