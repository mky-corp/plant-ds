import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { IPropsButtonHome } from '../../interfaces/props.interfaces';

const ButtonHome = ({ title, css, to, href }: IPropsButtonHome) => {
  const className = { className: `button__link-main ${css}` };

  return href?.slice(0, 1) === '#' ? (
    <HashLink to={href} {...className} replace>
      {title}
    </HashLink>
  ) : to ? (
    <Link to={to} {...className}>
      {title}
    </Link>
  ) : (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      {...className}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};

export default ButtonHome;
