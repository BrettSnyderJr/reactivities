import { useField } from 'formik';
import Form from 'react-bootstrap/Form';
import { ActivityCategory } from '../../models/activityCategory';

interface Props {
  controlId: string;
  placeholder: string;
  name: string;
  options: any;
  label?: string;
  defaultOptionText?: string;
}

const MySelectInput = (props: Props) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <>
      <Form.Group controlId={props.controlId}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          as='select'
          {...field}
          {...props}
          isValid={meta.touched && !meta.error}
          isInvalid={meta.touched && !!meta.error}
        >
          <option value=''>{props.defaultOptionText}</option>
          {props.options.map((option: ActivityCategory) => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </Form.Control>
        {meta.touched && meta.error ? (
          <Form.Control.Feedback type='invalid'>
            {meta.error}
          </Form.Control.Feedback>
        ) : null}
      </Form.Group>
    </>
  );
};

export default MySelectInput;
