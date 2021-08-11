import { Form } from 'react-bootstrap';
import { IPropsDescOptions } from '../../interfaces/props.interfaces';

const DescOptions = ({ title, description }: IPropsDescOptions) => {
  return (
    <Form.Group className='m-desc d-flex flex-column justify-content-center'>
      <Form.Label className='white-color h3'>{title}</Form.Label>
      <Form.Text className='gray-light-color text-justify mx-2'>
        {description}
      </Form.Text>
    </Form.Group>
  );
};

export default DescOptions;
