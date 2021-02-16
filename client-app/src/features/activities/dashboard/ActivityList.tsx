import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Activity } from "../../../app/layout/models/activity";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

const getActivity = (
  activity: Activity,
  selectActivity: (id: string) => void,
  deleteActivity: (id: string) => void
) => {
  return (
    <Card className="border-0">
      <Card.Body className="p-0">
        <Card.Title>{activity.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {activity.date}
        </Card.Subtitle>
        <Card.Text>{activity.description}</Card.Text>
        <Card.Text>
          {activity.city}, {activity.venue}
        </Card.Text>
        <Badge variant="secondary">{activity.category}</Badge>
      </Card.Body>
      <Card.Footer className="bg-white border-0 p-0">
        <Button
          variant="primary"
          className="float-right"
          onClick={() => {
            selectActivity(activity.id);
          }}
        >
          View
        </Button>
        <Button
          variant="danger"
          className="float-right"
          onClick={() => {
            deleteActivity(activity.id);
          }}
        >
          Delete
        </Button>
      </Card.Footer>
    </Card>
  );
};

const ActivityList = ({
  activities,
  selectActivity,
  deleteActivity,
}: Props) => {
  return (
    <ListGroup className="text-dark">
      {activities.map((a: Activity) => {
        return (
          <ListGroup.Item key={a.id}>
            {getActivity(a, selectActivity, deleteActivity)}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default ActivityList;
