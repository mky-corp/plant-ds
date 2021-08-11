import { useContext, useEffect } from 'react';

// components
import ModalSesion from '../components/ModalSesion/ModalSesion';
import Modal from '../components/Modal/Modal';

// contexts
import AuthContext from '../context/AuthContext';
import FileContext from '../context/FileContext';

// hooks
import useModal from '../hooks/useModal';
import useTF from '../hooks/useTF';

const Detects = () => {
  const { buffers } = useContext(FileContext);
  const { auth } = useContext(AuthContext);
  const { predictions, errors, loading, predictionsModel } = useTF();
  const [isOpenLogin, openModal] = useModal();

  console.log(errors);

  useEffect(() => {
    if (!auth) openModal();
    if (!loading) predictionsModel(buffers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    if (predictions.length !== 0) console.log(predictions);
  }, [predictions]);

  return (
    <>
      <Modal unClose={true} isOpen={isOpenLogin}>
        <h3 className='text-center fs-5'>Necesitas Iniciar Sesión</h3>
        <ModalSesion />
      </Modal>
      <div className='d-flex flex-column'>
        <b>{errors && 'Error al cargar el modelo'}</b>
      </div>
    </>
  );
};

export default Detects;
