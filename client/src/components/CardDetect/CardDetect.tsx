import { useState } from 'react';
import { IPropsCardDetect } from '../../interfaces/props.interfaces';
import Loader from '../Loader/Loader';
import MainButton from '../MainButton/MainButton';
import './CardDetect.css';

const transformArray = (predict: number[]) => {
  const answer = [];
  for (let idx = 0; idx < predict.length; ++idx)
    if (predict[idx] > 0.1) answer.push({ res: idx, value: predict[idx] });
  return answer;
};

const CardDetect = ({
  idx,
  img,
  name,
  buffer,
  onClick,
  setState,
  onRemove,
  deletePred,
  predictions
}: IPropsCardDetect) => {
  const [loading, setLoading] = useState<boolean>(false);
  const prediction = transformArray(predictions || []);

  const handlePredict = async () => {
    if (onClick) {
      setLoading(true);
      await onClick(buffer, idx);
      setState[0](!setState[1]);
      setLoading(false);
    }
  };

  const handleDelete = () => {
    if (deletePred && onRemove) {
      onRemove(idx);
      deletePred(idx);
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
            {(prediction.length === 0) && (
              <MainButton
                title='Detectar'
                first={true}
                onClick={handlePredict}
              />
            )}

            {(prediction?.length !== 0) && (
              <ul>
                {prediction?.length &&
                prediction.map(({ res, value }, idx) => (
                  <li key={idx}>
                    La clase {res} tiene {value}
                  </li>
                ))}
              </ul>
            )}
            <MainButton title='Eliminar' onClick={handleDelete} />
          </>
        )}
      </div>
    </section>
  );
};

export default CardDetect;
