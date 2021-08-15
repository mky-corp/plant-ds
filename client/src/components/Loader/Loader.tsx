import './Loader.css';

const Loader = () => {
  return (
    <section className='d-flex justify-content-center'>
      <div className='lds-roller'>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </section>
  );
};

export default Loader;
