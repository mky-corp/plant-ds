import { IPropsCardAbout } from '../../interfaces/props.interfaces';
import './CardAbout.css';

const CardAbout = ({ img, href, title }: IPropsCardAbout) => {

  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='text-center py-2'
    >
      <section className='card__main-about my-3 mt-5 my-lg-0'>
        <img src={img} alt={title} />
        <p className='link-color'>{title}</p>
      </section>
    </a>
  );
};

export default CardAbout;