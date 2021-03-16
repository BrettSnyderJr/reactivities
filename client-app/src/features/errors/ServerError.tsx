import { observer } from 'mobx-react-lite';
import React from 'react';
import { Alert, Card } from 'react-bootstrap';
import { useStore } from '../../app/stores/store';

const ServerError = () => {
  const { commonStore } = useStore();

  return (
    <>
      <h1>Server Error</h1>
      <Card className=''>
        <Card.Body>
          <Card.Title className='text-danger'>{commonStore.error?.message}</Card.Title>
          {commonStore.error?.details && <Alert variant='danger'>{commonStore.error.details}</Alert>}
        </Card.Body>
      </Card>
    </>
  );
};

export default observer(ServerError);
