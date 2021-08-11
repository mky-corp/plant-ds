import { Form } from 'react-bootstrap';
import { IPropsFormGroup } from '../../interfaces/props.interfaces';
import './FormGroup.css';

const FormGroup = ({
  id,
  name,
  type,
  label,
  value,
  onBlur,
  onChange,
  placeholder
}: IPropsFormGroup) => {
  return (
    <Form.Group className='mx-input' controlId={id}>
      <Form.Label className='fw-bold h4 mb-2 mt-2 letters-s-05'>
        {label}
      </Form.Label>
      <Form.Control
        className='formgroup__input'
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        name={name}
        value={value}
        required
      />
    </Form.Group>
  );
};

export default FormGroup;
