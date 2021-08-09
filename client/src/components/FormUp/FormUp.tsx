import { Form, Container } from 'react-bootstrap';
import { IPropsFormUp } from '../../interfaces/props.interfaces';
import DescOptions from '../DescOptions';

const FormUp = ({
  title,
  children,
  description,
  handleSubmit
}: IPropsFormUp) => {
  return (
    <Form
      className='w-100 h-100 d-flex flex-column justify-content-evenly align-items-center'
      onSubmit={handleSubmit}
    >
      {children}
      <Container>
        <DescOptions title={title} description={description} />
      </Container>
    </Form>
  );
};

export default FormUp;
