import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import detect from '../assets/microscope-analysis.svg';
import FooterHome from '../layouts/FooterHome/FooterHome';

// components
import ModalSession from '../components/ModalSession/ModalSession';
import MainButton from '../components/MainButton/MainButton';
import CardDetect from '../components/CardDetect/CardDetect';
import Loader from '../components/Loader/Loader';
import Modal from '../components/Modal/Modal';

// contexts
import AuthContext from '../context/AuthContext';
import FileContext from '../context/FileContext';

// hooks
import useModal from '../hooks/useModal';
import useTF from '../hooks/useTF';

const Detect = () => {
  const history = useHistory();
  const [ok, setOk] = useState(false);
  const [load, setLoad] = useState(false);
  const { buffers, names, images, handleDeleteAll } = useContext(FileContext);
  const { auth } = useContext(AuthContext);
  const {
    predictionBuffers,
    deletePrediction,
    predictBuffer,
    predictions,
    predLoad,
    loading
  } = useTF();
  const [isOpenLogin, openModalLogin] = useModal();
  const [isOpenLoad, openModalLoad, closeModalLoad] = useModal();

  useEffect(() => {
    if (!auth) return openModalLogin();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  useEffect(() => {
    if (predLoad) {
      openModalLoad();
      setLoad(true);
    }

    if (!predLoad) closeModalLoad();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [predLoad]);

  useEffect(() => {
    if (loading) openModalLoad();
    if (!loading) closeModalLoad();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <section className='min-vh-100 d-flex flex-column'>
      <Modal handleClose={() => history.push('/')} isOpen={isOpenLogin}>
        <h3 className='text-center fs-5'>Necesitas Iniciar Sesión</h3>
        <ModalSession />
      </Modal>
      <Modal unClose={true} isOpen={isOpenLoad}>
        <h3 className='text-center fs-4'>
          {predLoad
            ? 'Se están evaluando todas las imágenes'
            : 'Cargando el modelo…'}
        </h3>
        <Loader />
      </Modal>

      <main className='flex-grow-1'>
        <article className='d-flex my-5 h-75 flex-column flex-lg-row align-items-center justify-content-around'>
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
                  Puede darle al botón para identificar en todas las imágenes
                  subidas para su posible enfermedad o evaluarlas una por una.
                </p>
                {(!load || predLoad) && <MainButton
                  first={true}
                  title='Detectar en todas'
                  onClick={() => predictionBuffers(buffers)}
                />}
                {(load && !predLoad) && <p><b>Todas las imágenes han sido evaluadas</b></p>}
              </section>
            </section>
          </section>
        </article>
        <article className='main__grid-detect px-0 px-md-3 py-5'>
          {images?.length ? (
            images?.map((item, idx) => (
              <CardDetect
                key={idx}
                idx={idx}
                img={item}
                setState={[setOk, ok]}
                name={names ? names[idx] : `Image ${idx}`}
                buffer={buffers && buffers[idx]}
                onClick={predictBuffer}
                onRemove={handleDeleteAll}
                deletePred={deletePrediction}
                predictions={predictions[idx]}
              />
            ))
          ) : (
            <p>No hay imágenes cargadas</p>
          )}
        </article>
      </main>
      <FooterHome />
    </section>
  );
};

export default Detect;
