import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityFormik from '../../features/activities/form/ActivityFormik';
import ActivityForm from '../../features/activities/form/ActivityForm';
import HomePage from '../../features/home/HomePage';
import { observer } from 'mobx-react-lite';
import { Route, Switch, useLocation } from 'react-router-dom';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import TestErrors from '../../features/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';

const App = () => {
  const location = useLocation();

  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar />
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => {
          return (
            <>
              <NavBar />
              <Container style={{ marginTop: '7em' }}>
                <Switch>
                  <Route exact path='/activities' component={ActivityDashboard} />
                  <Route path='/activities/:id' component={ActivityDetails} />
                  <Route key={location.key} path={['/create-activity', '/manage/:id']} component={ActivityFormik} />
                  <Route path='/errors' component={TestErrors} />
                  <Route path='/server-error' component={ServerError} />
                  <Route component={NotFound} />
                </Switch>
              </Container>
            </>
          );
        }}
      />
    </>
  );
};

export default observer(App);
