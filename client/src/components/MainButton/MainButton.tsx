import { IPropsMainButton } from '../../interfaces/props.interfaces';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainButton.css';

const bg = ['', 'principal__btn', 'secondary__btn', 'tertiary__btn'];

const MainButton = ({ to, idx, title, clName, onClick }: IPropsMainButton) => {
  const classes = {
    className: `${bg[idx]} d-flex mx-auto fw-bold justify-content-center align-content-center mb-3 mb-md-1 ${clName}`
  };

  return to ? (
    <Link to={to} {...classes}>
      <p className='fw-bold m-0 d-flex align-items-center letters-s-1'>
        {title}
      </p>
    </Link>
  ) : (
    <Button onClick={onClick} {...classes}>
      <p className='fw-bold m-0 mt-1 letters-s-1'>{title}</p>
    </Button>
  );
};

export default MainButton;
