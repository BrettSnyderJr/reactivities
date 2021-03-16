import React, { Fragment } from 'react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import ActivityListItem from './ActivityListItem';
import { Col, Row } from 'react-bootstrap';

const ActivityList = () => {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activities]) => {
        return (
          <Row key={group}>
            <Col>
              <h6 className=''>{group}</h6>
              {activities.map((activity) => {
                return <ActivityListItem key={activity.id} activity={activity} />;
              })}
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default observer(ActivityList);
