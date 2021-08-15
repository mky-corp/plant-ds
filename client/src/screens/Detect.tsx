import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// components
import ModalSession from '../components/ModalSession/ModalSession';
import Modal from '../components/Modal/Modal';

// contexts
import AuthContext from '../context/AuthContext';
import FileContext from '../context/FileContext';

// hooks
import useModal from '../hooks/useModal';
import useTF from '../hooks/useTF';

const Detect = () => {
  const history = useHistory();
  const { buffers } = useContext(FileContext);
  const { auth } = useContext(AuthContext);
  const { predictions, errors, loading, predictionsModel } = useTF();
  const [isOpenLogin, openModal] = useModal();

  useEffect(() => {
    if (!auth) openModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  useEffect(() => {
    if (!loading) predictionsModel(buffers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    if (predictions.length !== 0) console.log(predictions);
  }, [predictions]);

  return (
    <>
      <Modal handleClose={() => history.push('/')} isOpen={isOpenLogin}>
        <h3 className='text-center fs-5'>Necesitas Iniciar Sesión</h3>
        <ModalSession />
      </Modal>
      <div className='d-flex flex-column'>
        <b>{errors && 'Error al cargar el modelo'}</b>
      </div>
    </>
  );
};

export default Detect;
