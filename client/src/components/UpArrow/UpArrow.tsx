import { useRef } from 'react';
import { d, w } from '../../utils/Globals';
import './UpArrow.css';

const UpArrow = () => {
  const $scrollTop = useRef<HTMLButtonElement>(null);

  w.addEventListener('scroll', () => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    scrollTop > 600
      ? $scrollTop.current?.classList.remove('hidden')
      : $scrollTop.current?.classList.add('hidden');
  });

  return (
    <button
      ref={$scrollTop}
      onClick={() => {
        w.scrollTo({ behavior: 'smooth', top: 0 });
      }}
      className='scroll-top-btn all-animations
       d-flex justify-content-center align-items-center hidden'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        fill='currentColor'
        className='bi bi-chevron-up'
        viewBox='0 0 16 16'
      >
        <path
          fillRule='evenodd'
          d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
        />
      </svg>
    </button>
  );
};

export default UpArrow;
