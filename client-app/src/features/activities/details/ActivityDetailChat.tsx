import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

const ActivityDetailChat = () => {
  return (
    <Card className=''>
      <Card.Header className='text-center font-weight-bold text-white bg-primary'>Chat about this event</Card.Header>
      <Card.Body className=''>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <Row className=''>
              <Col md={1} className=''>
                <Image src={`/assets/user.png`} height='50' className='m-auto' />
              </Col>
              <Col md={11} className=''>
                <Card.Text>UserName</Card.Text>
                <Card.Subtitle>Today at</Card.Subtitle>
                <Card.Text>Response text</Card.Text>
                <Card.Text>Reply</Card.Text>
              </Col>
            </Row>
            <Row className=''>
              <Col>
                <Form>
                  <Form.Group controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as='textarea' rows={5} />
                  </Form.Group>
                  <Button variant='primary' type='submit'>
                    Add Reply
                  </Button>
                </Form>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ActivityDetailChat;
