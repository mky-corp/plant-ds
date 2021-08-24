import { IPropsCardTech } from '../../interfaces/props.interfaces';
import './CardTech.css';

const CardTech = ({ title, tech }: IPropsCardTech) => {
  return (
    <section className='w-100 pt-3'>
      <h3 className='letters-s-5 text-center first-color'>{title}</h3>
      <section className='d-flex justify-content-evenly align-items-center'>
        {tech.map(({ href, title, img }, idx) => (
          <a
            className='w-100 px-1 px-md-2 min-height-card d-flex flex-column justify-content-evenly align-items-center'
            href={href}
            key={idx}
            target='_blank'
            rel='noreferrer'
          >
            <img className='max-tech-card my-auto' src={img} alt={title} />
            <p className='fs-small-12 text-center'>{title}</p>
          </a>
        ))}
      </section>
    </section>
  );
};

export default CardTech;
