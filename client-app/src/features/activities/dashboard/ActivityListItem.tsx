import React, { SyntheticEvent, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import { BsFillCalendarFill, BsGeoAlt } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Col, Row } from 'react-bootstrap';

interface Props {
  activity: Activity;
}

const ActivityListItem = ({ activity }: Props) => {
  const { activityStore } = useStore();
  const { loading, deleteActivity } = activityStore;

  const [target, setTarget] = useState('');

  const handleActivityDelete = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setTarget(event.currentTarget.name);
    deleteActivity(id);
  };

  return (
    <Card className='p-0 mb-2'>
      <Card.Body className='p-0'>
        <Row className='m-0 border-top'>
          <Col md={3} className='d-flex p-3'>
            <Image src={`/assets/user.png`} fluid roundedCircle className='vertical-align-middle' />
          </Col>
          <Col md={9} className='p-2'>
            <Card.Title>
              <Link to={`/activities/${activity.id}`} className='text-decoration-none font-weight-bold text-dark'>
                {activity.title}
              </Link>
            </Card.Title>
            <Card.Text>{activity.description}</Card.Text>
            <Badge variant='secondary'>{activity.category}</Badge>
          </Col>
        </Row>
        <Row className='m-0 border-top'>
          <Col className='p-2 font-weight-bold'>
            <BsGeoAlt />
            {`The ${activity.venue} - ${activity.city}`}
          </Col>
        </Row>
        <Row className='m-0 border-top'>
          <Col className='p-2'>Attendees go here</Col>
        </Row>
      </Card.Body>
      <Card.Footer className='bg-white'>
        <Button as={Link} to={`/activities/${activity.id}`} variant='primary' className='float-right'>
          View
        </Button>
        <Button
          name={activity.id}
          variant='danger'
          className='float-right mr-2'
          disabled={loading && target === activity.id}
          onClick={(event: any) => handleActivityDelete(event, activity.id)}
        >
          {loading && target === activity.id ? <Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' /> : 'Delete'}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ActivityListItem;
