import { Form } from 'react-bootstrap';

interface propDown {
  title: string;
  description: string;
}

const DescOptions = ({ title, description }: propDown) => {
  return (
    <Form.Group className='m-4 m-auto w-50 d-flex flex-column justify-content-center'>
      <Form.Label className='white-color h3'>{title}</Form.Label>
      <Form.Text className='gray-light-color text-justify mx-2'>
        {description}
      </Form.Text>
    </Form.Group>
  );
};

export default DescOptions;
