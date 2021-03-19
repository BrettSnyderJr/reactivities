import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Activity } from '../../../app/models/activity';
import { format } from 'date-fns';

interface Props {
  activity: Activity;
}

const activityImageStyle = {
  filter: 'brightness(30%)',
};

const ActivityDetailHeader = ({ activity }: Props) => {
  return (
    <Card>
      <Card.Img variant='top' src={`/assets/CategoryImages/${activity.category}.jpg`} style={activityImageStyle} />
      <Card.ImgOverlay className='text-white'>
        <Card.Title>{activity.title}</Card.Title>
        <Card.Text>{format(activity.date!, 'dd MMM yyyy')}</Card.Text>
        <Card.Text>
          Hosted by <strong>UserName</strong>
        </Card.Text>
        <Card.Footer>
          <Button variant='primary' size='sm' className='float-left mr-2'>
            Join Activity
          </Button>
          <Button variant='danger' size='sm' className='float-left'>
            Cancel Attendance
          </Button>
          <Button as={Link} to={`/manage/${activity.id}`} variant='warning' size='sm' className='float-right'>
            Manage Event
          </Button>
        </Card.Footer>
      </Card.ImgOverlay>
    </Card>
  );
};

export default observer(ActivityDetailHeader);
