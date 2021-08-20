import notFound from '../assets/not-found.jpg';

const NotFound = () => {
  return (
    <section className='d-flex vh-100 flex-column bg-white justify-content-center align-items-center'>
      <img src={notFound} alt='Plants crease' />
      <p className='fw-bold fs-1'>Página no encontrada</p>
    </section>
  );
};

export default NotFound;
