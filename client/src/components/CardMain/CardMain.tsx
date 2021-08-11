import { IPropsCardMain } from '../../interfaces/props.interfaces';
import './CardMain.css';

const CardMain = ({ title, description, img, css }: IPropsCardMain) => {
  const classes = `${css} card__main d-flex justify-content-around align-items-center`;
  return (
    <section className={classes}>
      <img src={img} alt={title} />
      <section className='d-flex flex-column justify-content-center'>
        <h3 className='letters-s-05'>{title}</h3>
        <p className='fs-text text-justify'>{description}</p>
      </section>
    </section>
  );
};

export default CardMain;
