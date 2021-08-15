import { memo } from 'react';
import { IPropsHeaderForm } from '../../interfaces/props.interfaces';

const HeaderForm = ({ title }: IPropsHeaderForm) => {
  return (
    <header>
      <h1 className='h1 text-center pt-4 fw-bold letters-s-5'>{title}</h1>
    </header>
  );
};

export default memo(HeaderForm);
