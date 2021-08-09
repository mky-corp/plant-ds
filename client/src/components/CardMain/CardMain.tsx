import './CardMain.css';

const CardMain = ({ title, description, img, css }: any) => {
  return (
    <section className={css + ' card__main d-flex justify-content-around align-items-center'}>
      <img src={img} alt={title} />
      <section className='d-flex flex-column justify-content-center'>
        <h3 className='letters-s-05'>{title}</h3>
        <p className='fs-text'>{description}</p>
      </section>
    </section>
  );
};

export default CardMain;