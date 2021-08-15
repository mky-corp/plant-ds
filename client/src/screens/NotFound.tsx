import plantDS from '../assets/plant-sum.jpg';

const NotFound = () => {
  return (
    <section className='d-flex flex-column justify-content-center align-items-center'>
      <img src={plantDS} alt="Plants crease"/>
      <p className='fw-bold fs-1'>
        Not Found
      </p>
    </section>
  );
};

export default NotFound;