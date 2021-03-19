// Using formik

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
//import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Link, useHistory, useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { v4 as uuid } from 'uuid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from '../../../app/common/form/MyTextArea';
import MySelectInput from '../../../app/common/form/MySelectInput';
import { categoryOptions } from '../../../app/common/options/categoryOptions';
import MyDateInput from '../../../app/common/form/MyDateInput';
import { Activity } from '../../../app/models/activity';

const ActivityFormik = () => {
  const history = useHistory();
  const { activityStore, activityCategoryStore } = useStore();
  const {
    createActivity,
    updateActivity,
    loading,
    loadingInitial,
    loadActivity,
  } = activityStore;
  const {
    loadActivityCategories,
    activityCategoryRegistry,
  } = activityCategoryStore;

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

  useEffect(() => {
    if (activityCategoryRegistry.length <= 1) {
      loadActivityCategories();
    }
  }, [activityCategoryRegistry.length, loadActivityCategories]);

  const handleFormSubmit = (activity: Activity) => {
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

  if (loadingInitial) {
    return <LoadingComponent />;
  }

  // Simplify validation schema with YUP
  const validationSchema = Yup.object({
    title: Yup.string().required('The activity title is required'),
    description: Yup.string().required('The activity description is required'),
    category: Yup.string().required('The activity category is required'),
    date: Yup.string().required('The activity date is required').nullable(),
    city: Yup.string().required('The activity city is required'),
    venue: Yup.string().required('The activity venue is required'),
  });

  return (
    <Card className='p-2'>
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={activity}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({
          values: activity,
          handleChange,
          handleSubmit,
          isValid,
          isSubmitting,
          dirty,
        }) => (
          <Form onSubmit={handleSubmit} autoComplete='off'>
            <MyTextInput
              controlId='activity.title'
              name='title'
              placeholder='title'
            />
            <MyTextArea
              controlId='activity.description'
              placeholder='Description'
              name='description'
              rows={3}
            />
            <MySelectInput
              controlId='activity.category'
              placeholder='Category'
              name='category'
              options={activityCategoryRegistry}
              defaultOptionText='Select a category'
            />
            <MyDateInput
              controlId='activity.date'
              placeholderText='Date'
              name='date'
              showTimeSelect
              timeCaption='time'
              dateFormat='MMMM d, yyyy h:mm aa'
            />
            <MyTextInput
              controlId='activity.city'
              placeholder='City'
              name='city'
            />
            <MyTextInput
              controlId='activity.venue'
              placeholder='Venue'
              name='venue'
            />
            <ButtonGroup
              size='lg'
              className='w-100'
              aria-label='activity actions'
            >
              <Button as={Link} to='/activities' variant='outline-dark'>
                Cancel
              </Button>
              <Button
                variant='outline-primary'
                type='submit'
                disabled={isSubmitting || !isValid || !dirty}
              >
                {loading ? (
                  <Spinner
                    as='span'
                    animation='border'
                    size='sm'
                    role='status'
                    aria-hidden='true'
                  />
                ) : (
                  'Submit'
                )}
              </Button>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default observer(ActivityFormik);
