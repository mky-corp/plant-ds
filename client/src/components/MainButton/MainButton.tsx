import React from 'react';
import { Link } from 'react-router-dom';
import './MainButton.css';

const MainButton = () => {
  return (
    <main className='flex-grow-1'>
      <Link to='/options' className='principal__btn m-auto fs-4 fw-bold'>
        START
      </Link>
    </main >
  );
};

export default MainButton;