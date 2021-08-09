import { memo } from 'react';

const HeaderForm = ({ title }: any) => {
  return (
    <header>
      <h1 className='h1 text-center pt-4 fw-bold letters-s-05'>{title}</h1>
    </header>
  );
};

export default memo(HeaderForm);
