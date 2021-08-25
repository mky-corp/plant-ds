import { IPropsCardDetect } from '../../interfaces/props.interfaces';
import Loader from '../Loader/Loader';
import MainButton from '../MainButton/MainButton';
import './CardDetect.css';

const CardDetect = ({
  ok,
  idx,
  img,
  name,
  answer,
  openAll,
  deleteAll,
  predictAll
}: IPropsCardDetect) => {
  return (
    <section className='card__detect d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
      <div className='w-100 m-2 d-flex justify-content-center'>
        <img
          className='img-thumbnail p-2'
          src={img || ''}
          alt={`Plants detect ${name}`}
        />
      </div>
      <div className='d-flex flex-column h-100 w-100 px-1 position-relative justify-content-evenly align-items-center'>
        <h4 className='fs-small-14 w-title pt-3 fs-overflow first-color fw-bold'>{name}</h4>
        {ok === idx ? (
          <Loader />
        ) : (
          <>
            {answer?.length === 0 && (
              <div className='pt-3 pb-1'>
                <MainButton title='Detectar' idx={1} onClick={predictAll} />
              </div>
            )}
            {answer?.length !== 0 && (
              <ul className='p-0 m-0 d-flex flex-column pt-2 pt-md-3 pe-2 ps-2 pe-md-3 ps-md-0'>
                {answer?.length &&
                  answer.map(({ res, value }, idx) => (
                    <li className='link-undecorate' key={idx}>
                      <p className='fs-small-12 fs-overflow text-justify'>
                        {res} --- {value}
                      </p>
                    </li>
                  ))}
              </ul>
            )}
            <div className='pb-3'>
              <MainButton idx={3} title='Eliminar' onClick={deleteAll} />
            </div>
          </>
        )}
        {answer?.length !== 0 && (
          <p
            onClick={openAll}
            className='link-color pointer fs-small-12 link-fixed-detect position-absolute'
          >
            leer más
          </p>
        )}
      </div>
    </section>
  );
};

export default CardDetect;
