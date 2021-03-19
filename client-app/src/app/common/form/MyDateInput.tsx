import { useField } from 'formik';
import { Form } from 'react-bootstrap';
import DatePicker, {
  ReactDatePickerProps,
} from 'react-datepicker';

interface Props {
  controlId: string;
  label?: string;
}

const MyDateInput = (
  props: Props & Partial<ReactDatePickerProps>
) => {
  const [field, meta, helpers] = useField(props.name!);

  return (
    <>
      <Form.Group controlId={props.controlId}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          as={DatePicker}
          {...field}
          {...props}
          isValid={meta.touched && !meta.error}
          isInvalid={meta.touched && !!meta.error}
          selected={
            (field.value && new Date(field.value)) || null
          }
          onChange={(value) => helpers.setValue(value)}
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

export default MyDateInput;
