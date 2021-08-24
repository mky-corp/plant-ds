import { useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import detect from '../assets/microscope-analysis.svg';
import FooterHome from '../layouts/FooterHome/FooterHome';
import { IPropsCardDetect } from '../interfaces/props.interfaces';

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
import { transformArray } from '../services/validate.predict';

const Detect = () => {
  const history = useHistory();
  const [ok, setOk] = useState<number>(-1);
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
  const [isOpen, openModal, closeModal] = useModal();
  const [item, setItem] = useState<IPropsCardDetect>({});
  const [isOpenLogin, openModalLogin] = useModal();
  const [isOpenLoad, openModalLoad, closeModalLoad] = useModal();

  const handleOpen = (item: IPropsCardDetect) => {
    setItem(item);
    openModal();
  };

  const handlePredict = async (buffer: Uint8Array, idx: number) => {
    await setOk(idx);
    await predictBuffer(buffer, idx);
    await setOk(-1);
  };

  const handleDelete = (idx: number) => {
    handleDeleteAll && handleDeleteAll(idx);
    deletePrediction(idx);
  };

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
      <Modal
        unClose={!isOpenLogin && !isOpen}
        handleClose={
          isOpenLogin
            ? () => history.push('/')
            : false || isOpen
            ? closeModal
            : undefined
        }
        isOpen={isOpenLoad || isOpenLogin || isOpen}
      >
        {isOpenLoad && !isOpenLogin && (
          <>
            <h3 className='text-center fs-4'>
              {predLoad
                ? 'Se están evaluando todas las imágenes'
                : 'Cargando el modelo…'}
            </h3>
            <Loader />
            <p className='fs-small-12 text-center'>Esto puede tardar unos minutos...</p>
          </>
        )}
        {isOpenLogin && (
          <>
            <h3 className='text-center fs-5'>Necesitas Iniciar Sesión</h3>
            <ModalSession />
          </>
        )}
        {isOpen && item.answer && (
          <section className='card__detect-modal d-flex flex-column flex-md-row align-items-center over-y'>
            <div className='w-nav-auto m-1 m-md-3 d-flex flex-column align-content-center justify-content-center'>
              <img
                className='img-thumbnail p-1 p-md-3'
                src={item.img}
                alt={`Plants detect ${item.name}`}
              />
              <h4 className='fs-5 first-color w-100 text-center pt-3 fw-bold'>
                {item.name}
              </h4>
            </div>
            <div className='mt-auto'>
              {item.answer.length !== 0 && (
                <ul className='px-1 px-md-3'>
                  {item.answer.map(({ res, value }, idx) => (
                    <li className='list-unstyled py-1' key={idx}>
                      <h4>Con precisión {value}</h4>
                      <p className='fs-small-14 pt-1 pt-md-3 text-justify'>
                        {res}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )}
      </Modal>

      <main className='flex-grow-1'>
        <article className='d-flex my-5 h-75 flex-column flex-lg-row align-items-center justify-content-around'>
          <section className='card__main-principal d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
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
                <p className='text-justify fs-small-14 px-3 px-md-4 pb-2 pb-md-0'>
                  Puede darle al botón para identificar en todas las imágenes
                  subidas para su posible enfermedad o evaluarlas una por una.
                </p>
                {(!load || predLoad) && (
                  <MainButton
                    idx={1}
                    title='Detectar en todas'
                    onClick={() => predictionBuffers(buffers)}
                  />
                )}
                {load && !predLoad && (
                  <p className='px-3 px-md-4 text-center'>
                    <b className='fs-small-14 first-color'>Todas las plantas han sido evaluadas</b>
                  </p>
                )}
              </section>
            </section>
          </section>
        </article>
        <article className='main__grid-detect px-0 px-md-3 py-5'>
          {images?.length && buffers ? (
            images?.map((img, idx) => (
              <CardDetect
                ok={ok}
                idx={idx}
                img={img}
                key={idx}
                name={names && names[idx]}
                answer={transformArray(predictions[idx] || [])}
                openAll={() =>
                  handleOpen({
                    img: img,
                    name: names && names[idx],
                    answer: transformArray(predictions[idx] || [])
                  })
                }
                deleteAll={() => handleDelete(idx)}
                predictAll={() => handlePredict(buffers[idx], idx)}
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
