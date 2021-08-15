import { Link } from 'react-router-dom';
import { IPropsButtonHome } from '../../interfaces/props.interfaces';

const ButtonHome = ({ title, css, to, href }: IPropsButtonHome) => {
  const className = `button__link-main ${css}`;

  return to ? (
    <Link to={to} className={className}>
      {title}
    </Link>
  ) : (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className={className}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};

export default ButtonHome;
