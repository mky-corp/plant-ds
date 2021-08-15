import { IPropsCardAbout } from '../../interfaces/props.interfaces';
import './CardAbout.css';

const CardAbout = ({ img, href, title }: IPropsCardAbout) => {

  return (
    <section className='card__main-about my-3 mt-5 my-lg-0'>
      <img src={img} alt={title} />
      <a
        href={href}
        target='_blank'
        rel='noreferrer'
        className='text-center py-2'
      >
        {title}
      </a>
    </section>
  );
};

export default CardAbout;