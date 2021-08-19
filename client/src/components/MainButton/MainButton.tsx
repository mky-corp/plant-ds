import { IPropsMainButton } from '../../interfaces/props.interfaces';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainButton.css';

const MainButton = ({
  to,
  title,
  first,
  clName,
  onClick
}: IPropsMainButton) => {
  const classes = `${
    first ? 'principal__btn' : 'secondary__btn'
  } d-flex mx-auto fw-bold justify-content-center align-content-center mb-3 mb-md-1 ${clName}`;

  return to ? (
    <Link to={to} className={classes}>
      <p className='fw-bold m-0 d-flex align-items-center letters-s-1'>
        {title}
      </p>
    </Link>
  ) : (
    <Button onClick={onClick} className={classes}>
      <p className='fw-bold m-0 mt-1 letters-s-1'>{title}</p>
    </Button>
  );
};

export default MainButton;
