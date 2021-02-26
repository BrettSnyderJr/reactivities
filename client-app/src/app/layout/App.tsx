import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityForm from '../../features/activities/form/ActivityForm';
import HomePage from '../../features/home/HomePage';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <Route exact path='/' component={HomePage} />
        <Route path='/activities' component={ActivityDashboard} />
        <Route path='/createActivity' component={ActivityForm} />
      </Container>
    </>
  );
};

export default observer(App);
