import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityForm from '../../features/activities/form/ActivityForm';
import LoadingComponent from './LoadingComponent';
import HomePage from '../../features/home/HomePage';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';

const App = () => {
  const { activityStore } = useStore();
  const { loadActivities } = activityStore;

  useEffect(() => {
    loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) {
    return <LoadingComponent />;
  }

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <Route path='/' component={HomePage} />
        <Route path='/activities' component={ActivityDashboard} />
        <Route path='/createActivity' component={ActivityForm} />
      </Container>
    </>
  );
};

export default observer(App);
