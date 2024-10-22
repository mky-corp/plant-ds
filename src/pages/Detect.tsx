import { useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import left from '../assets/arrow-left.svg';
import detect from '../assets/microscope-analysis.svg';
import FooterHome from '../layouts/FooterHome/FooterHome';
import { transformArray } from '../services/validate.predict';
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
import Button from '@restart/ui/esm/Button';

const Detect = () => {
  const history = useHistory();
  const [ok, setOk] = useState<number>(-1);
  const [load, setLoad] = useState(false);
  const { buffers, names, images, handleDeleteAll, resetAll } =
    useContext(FileContext);
  const { auth } = useContext(AuthContext);
  const {
    deleteAllPredictions,
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

  const handleRemoveAll = () => {
    resetAll && resetAll();
    deleteAllPredictions();
  };

  const backOptions = () => {
    history.push('/options');
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
            <p className='fs-small-12 text-center'>
              Esto puede tardar unos minutos...
            </p>
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
            <div
              className='w-card-detect p-1 m-md-3 d-flex flex-column 
              align-items-center justify-content-center'
            >
              <img
                className='img-thumbnail p-1 p-md-3'
                src={item.img}
                alt={`Plants detect ${item.name}`}
              />
              <h4 className='fs-5 first-color h-card-title mb-3 letters-s-5 h-100 fs-overflow text-center pt-3 fw-bold'>
                {item.name}
              </h4>
            </div>
            <div className='my-auto'>
              {item.answer.length !== 0 && (
                <ul className='px-2 px-md-4'>
                  {item.answer.map(({ res, value }, idx) => (
                    <li className='list-unstyled py-1' key={idx}>
                      <h4>Con precisión al {value} %</h4>
                      <p className='fs-small-14 pt-1 pt-md-3 text-justify'>
                        <b>{res[0]}</b>: {res[1]}
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
              <section className='py-2 mb-2 py-md-0 d-flex flex-column justify-content-center align-items-center'>
                <p className='text-justify fs-small-14 px-2 px-md-4 pb-2 pb-md-0'>
                  Puede identificar en todas las imágenes o evaluarlas una por
                  una. Se recomienda solo hojas de plantas para mejorar la
                  precisión.
                </p>
                {(load && !predLoad) ||
                  (predictions?.length === names?.length &&
                    !predictions.find((el: number[]) => el?.length === 0) && (
                      <p className='px-3 px-md-4 text-center'>
                        <b className='fs-small-14 first-color'>
                          {!names?.length
                            ? 'Carga imágenes para evaluarlas'
                            : 'Todas las plantas han sido evaluadas'}
                        </b>
                      </p>
                    ))}
                <div className='d-flex pb-md-3'>
                  {predictions.length === 0 && names?.length === 0 ? (
                    <MainButton
                      idx={1}
                      to='/options'
                      clName='w-50 pb-1'
                      title='Regresar'
                    />
                  ) : (
                    <Button
                      className='btn btn-transparent'
                      type='button'
                      onClick={backOptions}
                    >
                      <img src={left} alt='Atrás' />
                    </Button>
                  )}

                  {(!load || predLoad) &&
                    predictions?.length !== names?.length && (
                      <MainButton
                        idx={1}
                        title='Detectar en todas'
                        onClick={() => predictionBuffers(buffers)}
                      />
                    )}

                  {predictions?.length === names?.length &&
                    names.length !== 0 && (
                      <MainButton
                        idx={3}
                        title='Limpiar'
                        onClick={handleRemoveAll}
                      />
                    )}
                </div>
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
