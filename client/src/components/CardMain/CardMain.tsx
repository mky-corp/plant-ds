import { IPropsCardMain } from '../../interfaces/props.interfaces';
import { HashLink as Link } from 'react-router-hash-link';
import './CardMain.css';

const CardMain = ({ title, href, description, img, grid }: IPropsCardMain) => {
  return (
    <Link to={href || '#'} className={grid}>
      <section className='card__main d-flex justify-content-around align-items-center'>
        <img src={img} alt={title} />
        <section className='d-flex flex-column justify-content-center'>
          <h3 className='letters-s-5'>{title}</h3>
          <p className='fs-small-12 text-justify'>{description}</p>
        </section>
      </section>
    </Link>
  );
};

export default CardMain;
