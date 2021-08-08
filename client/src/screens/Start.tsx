import Header from '../layouts/Header/Header';
import Footer from '../layouts/Footer/Footer';
import MainButton from '../components/MainButton/MainButton';

const Start = () => {
  return (
    <div className='bg__start vh-100 w-100'>
      <section className='bg__container d-flex flex-column align-items-center'>
        <Header />
        <MainButton />
        <Footer />
      </section>
    </div>
  );
};

export default Start;
