import { Form } from 'react-bootstrap';
import { IPropsDescOptions } from '../../interfaces/props.interfaces';

const DescOptions = ({ title, description }: IPropsDescOptions) => {
  return (
    <Form.Group
      className='
        m-0 mx-1 px-1 mx-md-3 px-md-3
        mx-lg-4 px-lg-4 px-xl-5 mx-xl-5 d-flex
        flex-column justify-content-center'
    >
      <Form.Label className='white-color h3'>{title}</Form.Label>
      <Form.Text className='gray-light-color text-justify mx-2 mx-lg-3'>
        {description}
      </Form.Text>
    </Form.Group>
  );
};

export default DescOptions;
