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
    <Form.Group className='mx-4 mx-sm-5 px-sm-3 px-md-3 mx-md-4' controlId={id}>
      <Form.Label className='fw-bold h4 mb-2 mt-3 letters-s-5'>
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
