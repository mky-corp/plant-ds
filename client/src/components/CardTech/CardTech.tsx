import { IPropsCardTech } from '../../interfaces/props.interfaces';

const CardTech = ({ title, img }: IPropsCardTech) => {
  return (
    <section className='my-2'>
      <h3 className='letters-s-5 mb-2 text-center'>{title}</h3>
      <img src={img} alt='Technologies and frameworks' />
    </section>
  );
};

export default CardTech;
