import { IPropsCardMain } from '../../interfaces/props.interfaces';
import { HashLink as Link } from 'react-router-hash-link';
import './CardMain.css';

const Card = ({ img, title, description }: IPropsCardMain) => {
  return (
    <section className='card__main d-flex justify-content-around align-items-center'>
      <img src={img} alt={title} />
      <section className='d-flex flex-column justify-content-center'>
        <h3 className='letters-s-5'>{title}</h3>
        <p className='fs-small-12 text-justify'>{description}</p>
      </section>
    </section>
  );
};

const CardMain = ({ img, href, title, onClick, description }: IPropsCardMain) => {
  const props = { img, title, description };

  return !onClick ? (
    <Link to={href || '#'} className='link-item'>
      <Card {...props} />
    </Link>
  ) : (
    <button onClick={onClick} className='position-relative p-0 btn button-item'>
      <Card {...props} />
      <p className='link-color fs-small-12 link-fixed position-absolute'>ver más</p>
    </button>
  );
};

export default CardMain;
