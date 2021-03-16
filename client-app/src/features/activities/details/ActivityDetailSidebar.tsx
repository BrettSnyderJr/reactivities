import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

const ActivityDetailSidebar = () => {
  return (
    <Card className='p-0 mb-2'>
      <Card.Header className='text-center font-weight-bold text-white bg-primary'>3 people going</Card.Header>
      <Card.Body className='p-0'>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <Row className='m-0'>
              <Col md={4} className='p-2 d-flex'>
                <Image src={`/assets/user.png`} fluid className='vertical-align-middle' />
              </Col>
              <Col md={8} className='p-2 text-center'>
                <div>UserName</div>
                <strong>Following</strong>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ActivityDetailSidebar;
