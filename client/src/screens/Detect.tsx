import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import detect from '../assets/microscope-analysis.svg';

// components
import ModalSession from '../components/ModalSession/ModalSession';
import Modal from '../components/Modal/Modal';

// contexts
import AuthContext from '../context/AuthContext';
import FileContext from '../context/FileContext';

// hooks
import useModal from '../hooks/useModal';
import useTF from '../hooks/useTF';
import MainButton from '../components/MainButton/MainButton';
import FooterHome from '../layouts/FooterHome/FooterHome';

const Detect = () => {
  const history = useHistory();
  const { buffers } = useContext(FileContext);
  const { auth } = useContext(AuthContext);
  const { predictions, loading, predictionsModel } = useTF();
  const [isOpenLogin, openModal] = useModal();

  useEffect(() => {
    if (!auth) openModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  useEffect(() => {
    if (predictions.length !== 0) console.log(predictions);
  }, [predictions]);

  return (
    <section className='vh-100 d-flex flex-column'>
      <Modal handleClose={() => history.push('/')} isOpen={isOpenLogin}>
        <h3 className='text-center fs-5'>Necesitas Iniciar Sesión</h3>
        <ModalSession />
      </Modal>

      <main className='flex-grow-1'>
        <article className='d-flex mt-5 h-75 flex-column flex-lg-row align-items-center justify-content-around'>
          <section
            className='card__main-principal d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
            <img
              className='w-50 h-50 pb-0 pb-md-3 pb-md-0 px-md-3'
              src={detect}
              alt='technologies'
            />
            <section className='d-flex flex-column justify-content-evenly align-items-center'>
              <h1 className='letters-s-5 fs-4 my-3 my-md-4 text-center dark-color'>
                Detección de las patologías
              </h1>
              <section className='py-3 mb-2 py-md-0'>
                <p className='text-justify fs-small-14 px-4 pb-2 pb-md-0'>
                  Puede darle al botón para identificar en todas las imágenes subidas la posible enfermedad o evaluarlas
                  una por una.
                </p>
                <MainButton
                  type='button'
                  first={true}
                  title='Detectar en todas'
                  onClick={() => predictionsModel(buffers)}
                />
              </section>
            </section>
          </section>
        </article>
      </main>
      <FooterHome />
    </section>
  );
};

export default Detect;
