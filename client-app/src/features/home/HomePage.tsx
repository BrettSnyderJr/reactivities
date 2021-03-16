import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container fluid className='masthead'>
      <Row>
        <Col md={4}></Col>
        <Col md={4} className='text-center centeredPage'>
          <Image src={`/assets/logo.png`} />
          <h1>Reactivities</h1>
          <Button as={Link} to='/activities' variant='outline-light'>
            Take me to activities!
          </Button>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};

export default HomePage;
