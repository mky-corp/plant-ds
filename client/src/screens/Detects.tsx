import { useContext, useEffect } from 'react';
import FileContext from '../context/FileContext';
import useTF from '../hooks/useTF';

const Detects = () => {
  const { buffers } = useContext(FileContext);
  const { predictions, errors, loading, predictionsModel } = useTF();

  console.log(errors);

  useEffect(() => {
    if (!loading) predictionsModel(buffers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    if (predictions.length !== 0) console.log(predictions);
  }, [predictions]);

  return (
    <div className='d-flex flex-column'>
      <b>{errors &&'Error al cargar el modelo'}</b>
    </div>
  );
};

export default Detects;
