import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Activity } from "../../../app/layout/models/activity";

interface Props {
  activity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
}

const ActivityDetails = ({
  activity,
  cancelSelectActivity,
  openForm,
}: Props) => {
  return (
    <Card className="mb-2">
      <Card.Img
        variant="top"
        src={`/assets/CategoryImages/placeholder.png`}
        alt="activity"
      />
      <Card.Body>
        <Card.Title>{activity.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {activity.date}
        </Card.Subtitle>
        <Card.Text></Card.Text>
      </Card.Body>
      <Card.Footer className="text-center bg-white">
        <ButtonGroup size="lg" className="w-100" aria-label="activity actions">
          <Button
            variant="outline-warning"
            onClick={() => {
              openForm(activity.id);
            }}
          >
            Edit
          </Button>
          <Button variant="outline-danger" onClick={cancelSelectActivity}>
            Cancel
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};

export default ActivityDetails;
