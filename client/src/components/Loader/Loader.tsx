import loader from '../../assets/spinner-loader.svg';

const Loader = () => {
  return (
    <section className='d-flex justify-content-center align-items-center'>
      <img className='w-auto' src={loader} alt='Cargando...' />
    </section>
  );
};

export default Loader;
