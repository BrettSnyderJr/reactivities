import React from 'react';
import Calendar from 'react-calendar';
import { Card, Col, Row } from 'react-bootstrap';

const ActivityFilters = () => {
  return (
    <>
      <Card className='p-0 mb-2' style={{ marginTop: '1.7rem' }}>
        <Card.Header>Filters</Card.Header>
        <Card.Body className='p-0'>
          <Row className='m-0 border-top'>
            <Col className='p-2'>All Activities</Col>
          </Row>
          <Row className='m-0 border-top'>
            <Col className='p-2'>I'm going</Col>
          </Row>
          <Row className='m-0 border-top'>
            <Col className='p-2'>I'm hosting</Col>
          </Row>
        </Card.Body>
      </Card>
      <Calendar />
    </>
  );
};

export default ActivityFilters;
