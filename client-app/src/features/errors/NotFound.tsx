import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Card className='text-center'>
      <Card.Body>
        <Card.Title>Oops - we've looked everywhere and could not find this page.</Card.Title>
        <Button as={Link} to='/activities'>
          Return to activities
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NotFound;
