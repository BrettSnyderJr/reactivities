import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const ActivityDetails = () => {
  const { activityStore } = useStore();
  const { selectedActivity: activity, openForm, cancelSelectedActivity } = activityStore;

  if (!activity) return <LoadingComponent />;

  return (
    <Card className='mb-2'>
      <Card.Img variant='top' src={`/assets/CategoryImages/placeholder.png`} alt='activity' />
      <Card.Body>
        <Card.Title>{activity.title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{activity.date}</Card.Subtitle>
        <Card.Text></Card.Text>
      </Card.Body>
      <Card.Footer className='text-center bg-white'>
        <ButtonGroup size='lg' className='w-100' aria-label='activity actions'>
          <Button
            variant='outline-primary'
            onClick={() => {
              openForm(activity.id);
            }}
          >
            Edit
          </Button>
          <Button variant='outline-dark' onClick={cancelSelectedActivity}>
            Cancel
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};

export default ActivityDetails;
