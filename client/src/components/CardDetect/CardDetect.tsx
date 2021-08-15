import { IPropsCardDetect } from '../../interfaces/props.interfaces';
import { Button } from 'react-bootstrap';
import './CardDetect.css';

const CardDetect = ({ img }: IPropsCardDetect) => {
  return (
    <section className='card__detect h-100 d-flex flew-column flex-md-row justify-content-evenly align-items-center'>
      <img src={img || ''} alt='Plants detect' />
      <div className='d-flex flex-column h-100 justify-content-evenly align-items-center'>
        <h3 className='fs-4'>Plant number x</h3>
        <Button className='primary-bg white-color fw-bold fs-small-14'>
          Detectar
        </Button>
        <Button className='secondary-bg white-color fw-bold fs-small-14'>
          Eliminar
        </Button>
      </div>
    </section>
  );
};

export default CardDetect;
