import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Activity } from '../../../app/models/activity';

interface Props {
  activity: Activity;
}

const ActivityDetailInfo = ({ activity }: Props) => {
  return (
    <Card className='p-0 mb-2' style={{ marginTop: '1.7rem' }}>
      <Card.Body className='p-0'>
        <Row className='m-0 border-top'>
          <Col className='p-2'>{activity.description}</Col>
        </Row>
        <Row className='m-0 border-top'>
          <Col className='p-2'>{activity.date}</Col>
        </Row>
        <Row className='m-0 border-top'>
          <Col className='p-2'>
            {activity.venue}, {activity.city}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ActivityDetailInfo;
