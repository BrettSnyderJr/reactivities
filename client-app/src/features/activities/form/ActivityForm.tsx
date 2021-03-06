// Using bootstrap forms

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Link, useHistory, useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { v4 as uuid } from 'uuid';
import { Activity } from '../../../app/models/activity';

const ActivityForm = () => {
  const history = useHistory();
  const { activityStore } = useStore();
  const { createActivity, updateActivity, loading, loadingInitial, loadActivity } = activityStore;
  const { id } = useParams<{ id: string }>();

  const [activity, setActivity] = useState<Activity>({
    id: '',
    title: '',
    date: null,
    description: '',
    category: '',
    city: '',
    venue: '',
  });

  useEffect(() => {
    if (id) {
      loadActivity(id).then((activity) => {
        setActivity(activity!);
      });
    }
  }, [id, loadActivity]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity).then(() => {
        history.push(`/activities/${newActivity.id}`);
      });
    } else {
      updateActivity(activity).then(() => {
        history.push(`/activities/${activity.id}`);
      });
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  if (loadingInitial) {
    return <LoadingComponent />;
  }

  return (
    <Card className='p-2'>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Group controlId='formActivity'>
          <Form.Control type='text' placeholder='Title' value={activity.title} name='title' onChange={handleInputChange} />
          <br />
          <Form.Control as='textarea' rows={3} value={activity.description} name='description' onChange={handleInputChange} />
          <br />
          <Form.Control type='text' placeholder='Category' value={activity.category} name='category' onChange={handleInputChange} />
          <br />
          <Form.Control type='date' placeholder='Date' value={activity.date?.toString()} name='date' onChange={handleInputChange} />
          <br />
          <Form.Control type='text' placeholder='City' value={activity.city} name='city' onChange={handleInputChange} />
          <br />
          <Form.Control type='text' placeholder='Venue' value={activity.venue} name='venue' onChange={handleInputChange} />
          <br />
        </Form.Group>
        <ButtonGroup size='lg' className='w-100' aria-label='activity actions'>
          <Button as={Link} to='/activities' variant='outline-dark'>
            Cancel
          </Button>
          <Button variant='outline-primary' type='submit' disabled={loading}>
            {loading ? <Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' /> : 'Submit'}
          </Button>
        </ButtonGroup>
      </Form>
    </Card>
  );
};

export default observer(ActivityForm);
