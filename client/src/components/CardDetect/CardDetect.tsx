import { useState } from 'react';
import { IPropsCardDetect } from '../../interfaces/props.interfaces';
import Loader from '../Loader/Loader';
import MainButton from '../MainButton/MainButton';
import './CardDetect.css';

interface Prediction {
  class: number;
  value: number;
}

const transformArray = (predict: number[]) => {
  const answer = [];
  for (let idx = 0; idx < predict.length; ++idx)
    if (predict[idx] > 0.1) answer.push({ class: idx, value: predict[idx] });
  return answer;
};

const CardDetect = ({
  idx,
  img,
  name,
  buffer,
  predictions,
  onClick,
  setState,
  onRemove,
  deletePred
}: IPropsCardDetect) => {
  const [loading, setLoading] = useState<boolean>(false);
  const preds = transformArray(predictions || []);

  const handlePredict = async () => {
    setLoading(true);
    if (setState) setState(true);

    if (setState && onClick && buffer !== undefined) {
      await onClick(buffer, idx);
      setLoading(false);
      setState(false);
    }
  };

  const handleDelete = () => {
    setLoading(true);
    if (deletePred && onRemove) {
      onRemove(idx);
      deletePred(idx);
      setLoading(false);
    }
  };

  return (
    <section className='card__detect h-100 d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
      <img
        className='w-50 py-3 ps-3'
        src={img || ''}
        alt={`Plants detect ${name}`}
      />
      <div className='d-flex flex-column h-100 justify-content-evenly align-items-center'>
        <p className='fs-small-14 fs-overflow fw-bold'>{name}</p>
        {loading ? (
          <Loader />
        ) : (
          <>
            {!preds.length ? (
              <MainButton
                title='Detectar'
                first={true}
                onClick={handlePredict}
              />
            ) : (
              ''
            )}

            {preds?.length ? (
              <ul>
                {preds?.length &&
                  preds.map(({ class: num, value }: Prediction, idx) => (
                    <li key={idx}>
                      La clase {num} tiene {value}
                    </li>
                  ))}
              </ul>
            ) : (
              ''
            )}
            <MainButton title='Eliminar' onClick={handleDelete} />
          </>
        )}
      </div>
    </section>
  );
};

export default CardDetect;
