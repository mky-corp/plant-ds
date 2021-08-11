import { IPropsMainButton } from '../../interfaces/props.interfaces';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainButton.css';

const MainButton = ({
  to,
  type,
  title,
  first,
  clName,
  onClick,
}: IPropsMainButton) => {
  const classes = `${
    first ? 'principal__btn' : 'secondary__btn'
  } d-flex m-auto fs-4 fw-bold justify-content-center align-content-center mb-1 ${clName}`;

  return to ? (
    <Link to={to} className={classes}>
      <p className='fw-bold m-0 d-flex align-items-center letters-s-1'>
        {title}
      </p>
    </Link>
  ) : (
    <Button type={type} onClick={onClick} className={classes}>
      <p className='fw-bold m-0 mt-1 letters-s-1'>{title}</p>
    </Button>
  );
};

export default MainButton;
