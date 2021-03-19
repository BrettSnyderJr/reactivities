import { useField } from 'formik';
import { Form } from 'react-bootstrap';

interface Props {
  controlId: string;
  placeholder: string;
  name: string;
  label?: string;
}

const MyTextInput = (props: Props) => {
  const [field, meta] = useField(props.name);

  return (
    <>
      <Form.Group controlId={props.controlId}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          isValid={meta.touched && !meta.error}
          isInvalid={meta.touched && !!meta.error}
          {...field}
          {...props}
        ></Form.Control>
        {meta.touched && meta.error ? (
          <Form.Control.Feedback type='invalid'>
            {meta.error}
          </Form.Control.Feedback>
        ) : null}
      </Form.Group>
    </>
  );
};

export default MyTextInput;
