import React from 'react';
import { Alert, ListGroup } from 'react-bootstrap';

interface Props {
  errors: string[] | null;
}

const ValidationErrors = ({ errors }: Props) => {
  return (
    <Alert variant='danger'>
      <Alert.Heading>Oops!</Alert.Heading>
      <p>One or more validation errors have occurred.</p>
      <hr />
      <ListGroup variant='flush'>
        {errors &&
          errors.map((err: any, i) => {
            return (
              <ListGroup.Item key={i} className='bg-transparent'>
                {err}
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </Alert>
  );
};

export default ValidationErrors;
