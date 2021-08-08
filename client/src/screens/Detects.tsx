import { useContext, useEffect } from 'react';
import FileContext from '../context/FileContext';
import useTF from '../hooks/useTF';

const Detects = () => {
  const { buffers } = useContext(FileContext);
  const { predictions, loading, predictionsModel } = useTF();

  useEffect(() => {
    if (!loading) predictionsModel(buffers);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    if (predictions.length !== 0) console.log(predictions);
  }, [predictions]);

  return <div>{!loading ? 'Modelo cargado!!!' : 'Cargando el modelo...'}</div>;
};

export default Detects;
