import React, { SyntheticEvent, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Activity } from '../../../app/models/activity';
import Spinner from 'react-bootstrap/Spinner';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

const ActivityList = () => {
  const { activityStore } = useStore();
  const { loading, deleteActivity, activitiesByDate } = activityStore;

  const [target, setTarget] = useState('');

  const handleActivityDelete = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setTarget(event.currentTarget.name);
    deleteActivity(id);
  };

  return (
    <ListGroup className='text-dark'>
      {activitiesByDate.map((activity: Activity) => {
        return (
          <ListGroup.Item key={activity.id}>
            <Card className='border-0'>
              <Card.Body className='p-0'>
                <Card.Title>{activity.title}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>{activity.date}</Card.Subtitle>
                <Card.Text>{activity.description}</Card.Text>
                <Card.Text>
                  {activity.city}, {activity.venue}
                </Card.Text>
                <Badge variant='secondary'>{activity.category}</Badge>
              </Card.Body>
              <Card.Footer className='bg-white border-0 p-0'>
                <Button
                  variant='primary'
                  className='float-right'
                  onClick={() => {
                    activityStore.selectActivity(activity.id);
                  }}
                >
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
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default observer(ActivityList);
